const express = require('express');
const nodemailer = require('nodemailer');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const https = require('https');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const USE_HTTPS = process.env.USE_HTTPS === 'true';

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./'));

// Database setup
const db = new sqlite3.Database('./reservations.db', (err) => {
    if (err) console.error('Database error:', err);
    else console.log('SQLite database connected');
});

// Create tables
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS reservations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        guests INTEGER NOT NULL,
        requests TEXT,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        status TEXT DEFAULT 'new',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
});

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'Sambandha2009@gmail.com',
        pass: process.env.EMAIL_PASSWORD
    }
});

// Verify email connection
transporter.verify((error, success) => {
    if (error) {
        console.log('Email configuration error:', error);
    } else {
        console.log('Email service ready');
    }
});

// Reservation endpoint
app.post('/api/reservation', async (req, res) => {
    try {
        const { name, email, phone, date, time, guests, requests } = req.body;

        if (!name || !email || !phone || !date || !time || !guests) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Save to database
        db.run(
            `INSERT INTO reservations (name, email, phone, date, time, guests, requests)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [name, email, phone, date, time, guests, requests || ''],
            function(err) {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ error: 'Failed to save reservation' });
                }

                // Send emails
                const restaurantEmail = {
                    from: process.env.EMAIL_USER || 'Sambandha2009@gmail.com',
                    to: 'Sambandha2009@gmail.com',
                    subject: `New Reservation Request from ${name}`,
                    html: `
                        <h2>New Reservation Request</h2>
                        <p><strong>Reservation ID:</strong> ${this.lastID}</p>
                        <p><strong>Customer Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Date:</strong> ${date}</p>
                        <p><strong>Time:</strong> ${time}</p>
                        <p><strong>Number of Guests:</strong> ${guests}</p>
                        <p><strong>Special Requests:</strong> ${requests || 'None'}</p>
                        <hr>
                        <p><a href="http://localhost:3000/admin.html">View in Admin Dashboard</a></p>
                    `
                };

                const customerEmail = {
                    from: process.env.EMAIL_USER || 'Sambandha2009@gmail.com',
                    to: email,
                    subject: 'Reservation Request Received - Sambandha Restaurant',
                    html: `
                        <h2>Thank you for your reservation request!</h2>
                        <p>Dear ${name},</p>
                        <p>We have received your reservation request with the following details:</p>
                        <ul>
                            <li><strong>Date:</strong> ${date}</li>
                            <li><strong>Time:</strong> ${time}</li>
                            <li><strong>Number of Guests:</strong> ${guests}</li>
                        </ul>
                        <p>We will confirm your reservation shortly via email or phone at ${phone}.</p>
                        <p>Thank you for choosing Sambandha Restaurant!</p>
                        <hr>
                        <p>Best regards,<br>Sambandha Restaurant Team</p>
                    `
                };

                Promise.all([
                    transporter.sendMail(restaurantEmail),
                    transporter.sendMail(customerEmail)
                ]).then(() => {
                    res.json({ success: true, message: 'Reservation request received', id: this.lastID });
                }).catch(err => {
                    console.error('Email error:', err);
                    res.status(500).json({ error: 'Reservation saved but email failed' });
                });
            }
        );
    } catch (error) {
        console.error('Reservation error:', error);
        res.status(500).json({ error: 'Failed to process reservation' });
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Save to database
        db.run(
            `INSERT INTO contacts (name, email, subject, message)
             VALUES (?, ?, ?, ?)`,
            [name, email, subject, message],
            function(err) {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ error: 'Failed to save message' });
                }

                const restaurantEmail = {
                    from: process.env.EMAIL_USER || 'Sambandha2009@gmail.com',
                    to: 'Sambandha2009@gmail.com',
                    subject: `New Contact Form Message: ${subject}`,
                    html: `
                        <h2>New Contact Form Message</h2>
                        <p><strong>From:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <hr>
                        <p><strong>Message:</strong></p>
                        <p>${message.replace(/\n/g, '<br>')}</p>
                    `
                };

                const customerEmail = {
                    from: process.env.EMAIL_USER || 'Sambandha2009@gmail.com',
                    to: email,
                    subject: 'We received your message - Sambandha Restaurant',
                    html: `
                        <h2>Thank you for contacting us!</h2>
                        <p>Dear ${name},</p>
                        <p>We have received your message and will get back to you soon.</p>
                        <p>Best regards,<br>Sambandha Restaurant Team</p>
                    `
                };

                Promise.all([
                    transporter.sendMail(restaurantEmail),
                    transporter.sendMail(customerEmail)
                ]).then(() => {
                    res.json({ success: true, message: 'Contact message received' });
                }).catch(err => {
                    console.error('Email error:', err);
                    res.status(500).json({ error: 'Message saved but email failed' });
                });
            }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// Get all reservations
app.get('/api/reservations', (req, res) => {
    db.all('SELECT * FROM reservations ORDER BY created_at DESC', (err, rows) => {
        if (err) {
            res.status(500).json({ error: 'Failed to fetch reservations' });
        } else {
            res.json(rows);
        }
    });
});

// Get single reservation
app.get('/api/reservations/:id', (req, res) => {
    db.get('SELECT * FROM reservations WHERE id = ?', [req.params.id], (err, row) => {
        if (err) {
            res.status(500).json({ error: 'Failed to fetch reservation' });
        } else {
            res.json(row);
        }
    });
});

// Update reservation status
app.put('/api/reservations/:id/status', (req, res) => {
    const { status } = req.body;
    db.run('UPDATE reservations SET status = ? WHERE id = ?', [status, req.params.id], (err) => {
        if (err) {
            res.status(500).json({ error: 'Failed to update status' });
        } else {
            res.json({ success: true, message: 'Status updated' });
        }
    });
});

// Delete reservation
app.delete('/api/reservations/:id', (req, res) => {
    db.run('DELETE FROM reservations WHERE id = ?', [req.params.id], (err) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete reservation' });
        } else {
            res.json({ success: true, message: 'Reservation deleted' });
        }
    });
});

// Get all contacts
app.get('/api/contacts', (req, res) => {
    db.all('SELECT * FROM contacts ORDER BY created_at DESC', (err, rows) => {
        if (err) {
            res.status(500).json({ error: 'Failed to fetch contacts' });
        } else {
            res.json(rows);
        }
    });
});

// Delete contact
app.delete('/api/contacts/:id', (req, res) => {
    db.run('DELETE FROM contacts WHERE id = ?', [req.params.id], (err) => {
        if (err) {
            res.status(500).json({ error: 'Failed to delete contact' });
        } else {
            res.json({ success: true, message: 'Contact deleted' });
        }
    });
});

// Start server with HTTPS or HTTP
if (USE_HTTPS && fs.existsSync(process.env.SSL_KEY_PATH) && fs.existsSync(process.env.SSL_CERT_PATH)) {
    const httpsOptions = {
        key: fs.readFileSync(process.env.SSL_KEY_PATH),
        cert: fs.readFileSync(process.env.SSL_CERT_PATH)
    };

    https.createServer(httpsOptions, app).listen(443, () => {
        console.log(`✓ HTTPS Server running on https://localhost`);
        console.log(`✓ Admin Dashboard: https://localhost/admin.html`);
    });

    // Redirect HTTP to HTTPS
    const httpApp = express();
    httpApp.use((req, res) => {
        res.redirect(`https://${req.headers.host}${req.url}`);
    });
    httpApp.listen(80, () => {
        console.log(`✓ HTTP redirect server running on port 80`);
    });
} else {
    app.listen(PORT, () => {
        console.log(`✓ HTTP Server running on http://localhost:${PORT}`);
        console.log(`✓ Admin Dashboard: http://localhost:${PORT}/admin.html`);
    });
}
