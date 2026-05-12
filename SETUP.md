# Sambandha Restaurant - Setup Guide

This guide explains how to set up the email system for customer reservations and contact forms.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Gmail account with 2-factor authentication enabled

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create .env file:**
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

3. **Configure Gmail App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Sign in with your Google account
   - Select "Mail" and "Windows Computer" (or your device)
   - Click "Generate"
   - Google will provide a 16-character password
   - Copy this password and paste it into the `.env` file as `EMAIL_PASSWORD`

   Example `.env`:
   ```
   EMAIL_USER=Sambandha2009@gmail.com
   EMAIL_PASSWORD=abcd efgh ijkl mnop
   PORT=3000
   ```

## Running the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:3000`

## How It Works

### Reservation Form
When a customer submits a reservation:
1. Their information is sent to the backend
2. An email is sent to `Sambandha2009@gmail.com` with all reservation details
3. A confirmation email is sent to the customer's provided email address
4. The customer sees a success message

### Contact Form
When a customer submits a contact form:
1. Their message is sent to the backend
2. An email is sent to `Sambandha2009@gmail.com` with the message details
3. A confirmation email is sent to the customer's provided email address
4. The customer sees a success message

## Email Templates

### Reservation Emails
- **To Restaurant:** Contains all reservation details (name, email, phone, date, time, guests, requests)
- **To Customer:** Confirmation message with reservation details and promise to confirm soon

### Contact Form Emails
- **To Restaurant:** Contains customer's message with contact details
- **To Customer:** Acknowledgment that their message was received

## Troubleshooting

### Email not sending
- Check that 2-factor authentication is enabled on your Google account
- Verify you're using an App Password, not your regular Google password
- Check that `.env` file exists and has the correct credentials
- Check server logs for error messages

### Server won't start
- Make sure Node.js is installed: `node --version`
- Make sure dependencies are installed: `npm install`
- Check that port 3000 is not already in use

### CORS errors in browser
- Make sure the server is running
- Check that requests are being made to the correct URL (http://localhost:3000)

## Admin Dashboard

Access the admin dashboard at: **http://localhost:3000/admin.html**

### Features

- 📊 **Dashboard Overview** - View statistics on reservations
- 📋 **Reservation Management**
  - View all reservations with full details
  - Update reservation status (Pending, Confirmed, Completed, Cancelled)
  - Delete reservations
  - Search by customer name or email
  - Auto-refresh every 30 seconds

- 💬 **Contact Messages**
  - View all contact form messages
  - Read full message content
  - Delete messages
  - Search by customer name

- 🔍 **Real-time Data**
  - Statistics show pending, confirmed, and completed reservations
  - Last updated timestamp
  - Automatic refresh every 30 seconds

## Database

All reservations and contact messages are stored in `reservations.db` (SQLite).

To inspect the database manually:
```bash
sqlite3 reservations.db
.tables
SELECT * FROM reservations;
SELECT * FROM contacts;
```

## Files Created/Modified

- `server.js` - Updated with SQLite database and API endpoints
- `package.json` - Updated with sqlite3 dependency
- `.env.example` - Environment variable template
- `.gitignore` - Updated to protect .env file
- `script.js` - Updated to send forms to backend API
- `admin.html` - New admin dashboard interface
- `admin-styles.css` - Dashboard styling
- `admin.js` - Dashboard functionality
- `SETUP.md` - This file (setup instructions)
