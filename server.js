const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Escape user-controlled values before interpolating into HTML email bodies
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Serve only the public export output, not the whole project (env files,
// source, node_modules, etc. must never be reachable over HTTP)
app.use(express.static('out'));

// Email transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'Sambandha2009@gmail.com',
        pass: process.env.EMAIL_PASSWORD // Use App Password for Gmail
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

        // Validation
        if (!name || !email || !phone || !date || !time || !guests) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const safe = {
            name: escapeHtml(name),
            email: escapeHtml(email),
            phone: escapeHtml(phone),
            date: escapeHtml(date),
            time: escapeHtml(time),
            guests: escapeHtml(guests),
            requests: requests ? escapeHtml(requests) : 'None'
        };

        // Email to restaurant
        const restaurantMailOptions = {
            from: process.env.EMAIL_USER || 'Sambandha2009@gmail.com',
            to: 'Sambandha2009@gmail.com',
            subject: `New Reservation Request from ${safe.name}`,
            html: `
                <h2>New Reservation Request</h2>
                <p><strong>Customer Name:</strong> ${safe.name}</p>
                <p><strong>Email:</strong> ${safe.email}</p>
                <p><strong>Phone:</strong> ${safe.phone}</p>
                <p><strong>Date:</strong> ${safe.date}</p>
                <p><strong>Time:</strong> ${safe.time}</p>
                <p><strong>Number of Guests:</strong> ${safe.guests}</p>
                <p><strong>Special Requests:</strong> ${safe.requests}</p>
                <hr>
                <p>Please confirm this reservation with the customer.</p>
            `
        };

        // Confirmation email to customer
        const customerMailOptions = {
            from: process.env.EMAIL_USER || 'Sambandha2009@gmail.com',
            to: email,
            subject: 'Reservation Request Received - Sambandha Restaurant',
            html: `
                <h2>Thank you for your reservation request!</h2>
                <p>Dear ${safe.name},</p>
                <p>We have received your reservation request with the following details:</p>
                <ul>
                    <li><strong>Date:</strong> ${safe.date}</li>
                    <li><strong>Time:</strong> ${safe.time}</li>
                    <li><strong>Number of Guests:</strong> ${safe.guests}</li>
                </ul>
                <p>We will confirm your reservation shortly via email or phone at ${safe.phone}.</p>
                <p>Thank you for choosing Sambandha Restaurant!</p>
                <hr>
                <p>Best regards,<br>Sambandha Restaurant Team</p>
            `
        };

        // Send both emails
        await transporter.sendMail(restaurantMailOptions);
        await transporter.sendMail(customerMailOptions);

        res.json({ success: true, message: 'Reservation request received' });
    } catch (error) {
        console.error('Reservation error:', error);
        res.status(500).json({ error: 'Failed to process reservation' });
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const safe = {
            name: escapeHtml(name),
            email: escapeHtml(email),
            subject: escapeHtml(subject),
            // Escape first, then convert newlines to <br> so the break tags survive
            message: escapeHtml(message).replace(/\n/g, '<br>')
        };

        // Email to restaurant
        const restaurantMailOptions = {
            from: process.env.EMAIL_USER || 'Sambandha2009@gmail.com',
            to: 'Sambandha2009@gmail.com',
            subject: `New Contact Form Message: ${safe.subject}`,
            html: `
                <h2>New Contact Form Message</h2>
                <p><strong>From:</strong> ${safe.name}</p>
                <p><strong>Email:</strong> ${safe.email}</p>
                <p><strong>Subject:</strong> ${safe.subject}</p>
                <hr>
                <p><strong>Message:</strong></p>
                <p>${safe.message}</p>
            `
        };

        // Confirmation email to customer
        const customerMailOptions = {
            from: process.env.EMAIL_USER || 'Sambandha2009@gmail.com',
            to: email,
            subject: 'We received your message - Sambandha Restaurant',
            html: `
                <h2>Thank you for contacting us!</h2>
                <p>Dear ${safe.name},</p>
                <p>We have received your message and will get back to you soon.</p>
                <p>Best regards,<br>Sambandha Restaurant Team</p>
            `
        };

        // Send both emails
        await transporter.sendMail(restaurantMailOptions);
        await transporter.sendMail(customerMailOptions);

        res.json({ success: true, message: 'Contact message received' });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
