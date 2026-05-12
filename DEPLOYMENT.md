# 🚀 Sambandha Restaurant - Deployment Guide

Complete instructions for deploying your website with HTTPS on your server.

## Prerequisites

- A server (VPS, dedicated server, or cloud instance)
- Your domain: **sambandharestaurant.com**
- SSH access to your server
- Linux OS (Ubuntu/Debian recommended)

## Quick Setup (5 minutes)

### 1. Connect to Your Server

```bash
ssh user@your-server-ip
# or
ssh user@sambandharestaurant.com
```

### 2. Clone Your Repository

```bash
git clone https://github.com/saugataryal2003-dot/sambandha.git
cd sambandha
```

### 3. Run HTTPS Setup Script

```bash
sudo bash setup-https.sh
```

This automatically:
- ✓ Installs Certbot
- ✓ Gets free SSL certificate from Let's Encrypt
- ✓ Updates .env with HTTPS settings
- ✓ Configures auto-renewal

### 4. Install Dependencies

```bash
npm install
```

### 5. Add Gmail Password

Edit `.env` and add your Gmail app password:

```bash
nano .env
```

Change:
```
EMAIL_PASSWORD=your_app_password_here
```

To your actual 16-character app password from Google.

### 6. Start Server with PM2

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start the app
sudo pm2 start ecosystem.config.js

# Auto-start on server reboot
sudo pm2 startup
sudo pm2 save
```

### ✅ Done! Your Site is Live on HTTPS

Visit: **https://sambandharestaurant.com** 🎉

---

## Detailed Setup Steps

### Step 1: Server Preparation

**Update system packages:**
```bash
sudo apt-get update
sudo apt-get upgrade -y
```

**Install Node.js (if not already installed):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version  # Verify
npm --version   # Verify
```

**Install Git:**
```bash
sudo apt-get install -y git
```

### Step 2: Clone Repository

```bash
cd /home/username
# or wherever you want to store the app
git clone https://github.com/saugataryal2003-dot/sambandha.git
cd sambandha
```

### Step 3: Get SSL Certificate

**Option A: Automatic (Recommended)**

```bash
sudo bash setup-https.sh
```

**Option B: Manual**

```bash
# Install Certbot
sudo apt-get install -y certbot

# Get certificate (answer prompts)
sudo certbot certonly --standalone \
    -d sambandharestaurant.com \
    -d www.sambandharestaurant.com
```

### Step 4: Configure Environment

**Edit .env file:**
```bash
nano .env
```

**Set your Gmail app password:**
```
EMAIL_USER=Sambandha2009@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
PORT=3000
USE_HTTPS=true
SSL_CERT_PATH=/etc/letsencrypt/live/sambandharestaurant.com/fullchain.pem
SSL_KEY_PATH=/etc/letsencrypt/live/sambandharestaurant.com/privkey.pem
```

### Step 5: Install Dependencies

```bash
npm install
```

### Step 6: Start Application

**Using PM2 (Recommended - auto-restarts, persistent):**

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start application
sudo pm2 start ecosystem.config.js

# View logs
sudo pm2 logs sambandha

# Monitor
sudo pm2 monit

# Setup auto-start on boot
sudo pm2 startup
sudo pm2 save
```

**Or Run Directly (for testing):**
```bash
sudo node server.js
```

---

## Verify Installation

### Check HTTPS is Working

```bash
# Test HTTPS connection
curl -k https://sambandharestaurant.com

# Check certificate
sudo certbot certificates

# View certificate details
openssl s_client -connect sambandharestaurant.com:443
```

### Check Services

```bash
# View running PM2 apps
sudo pm2 list

# View logs
sudo pm2 logs sambandha

# Check ports
sudo netstat -tlnp | grep -E ':80|:443|:3000'
```

### Test Email

Make a test reservation:
1. Go to https://sambandharestaurant.com
2. Submit a test reservation
3. Check Sambandha2009@gmail.com inbox

### Access Admin Dashboard

- Admin: https://sambandharestaurant.com/admin.html

---

## Maintenance

### Monitor Application

```bash
# Real-time monitoring
sudo pm2 monit

# View logs
sudo pm2 logs sambandha

# View specific errors
tail -f ~/.pm2/logs/sambandha-error.log
```

### Update Code

```bash
cd ~/sambandha
git pull origin main
npm install
sudo pm2 restart sambandha
```

### Renew SSL Certificate

Automatically done by Certbot, but you can manually renew:

```bash
# Test renewal
sudo certbot renew --dry-run

# Manual renewal
sudo certbot renew
```

### Stop/Restart Application

```bash
# Stop
sudo pm2 stop sambandha

# Restart
sudo pm2 restart sambandha

# Delete
sudo pm2 delete sambandha
```

---

## Security Best Practices

1. **Keep system updated:**
   ```bash
   sudo apt-get update && sudo apt-get upgrade
   ```

2. **Use strong passwords:**
   - Gmail app password: 16 random characters
   - Server SSH key instead of passwords

3. **Firewall setup:**
   ```bash
   sudo ufw enable
   sudo ufw allow 22  # SSH
   sudo ufw allow 80  # HTTP
   sudo ufw allow 443 # HTTPS
   ```

4. **Regular backups:**
   ```bash
   # Backup database
   cp reservations.db reservations.db.backup
   ```

5. **Monitor logs:**
   ```bash
   sudo pm2 logs sambandha
   # Check for errors weekly
   ```

---

## Troubleshooting

### HTTPS Not Working

**Check certificate exists:**
```bash
ls -la /etc/letsencrypt/live/sambandharestaurant.com/
```

**Check .env paths are correct:**
```bash
cat .env | grep SSL
```

**Verify ports 80 and 443 are open:**
```bash
sudo netstat -tlnp | grep -E ':80|:443'
```

### Email Not Sending

**Check Gmail app password:**
1. Go to https://myaccount.google.com/apppasswords
2. Generate new password
3. Update .env with new password
4. Restart: `sudo pm2 restart sambandha`

**Check logs:**
```bash
sudo pm2 logs sambandha | grep -i email
```

### Port Already in Use

```bash
# Find what's using the port
sudo lsof -i :443
sudo lsof -i :80

# Kill the process
sudo kill -9 <PID>
```

### Certificate Expired

```bash
# Check expiration
sudo certbot certificates

# Renew manually
sudo certbot renew --force-renewal
```

---

## Useful Commands Reference

```bash
# View all PM2 apps
sudo pm2 list

# View app status
sudo pm2 status sambandha

# Restart app
sudo pm2 restart sambandha

# View live logs
sudo pm2 logs sambandha

# View specific log file
tail -f ~/.pm2/logs/sambandha-out.log

# Stop all apps
sudo pm2 stop all

# Delete app from PM2
sudo pm2 delete sambandha

# Restart PM2 daemon
sudo pm2 kill

# Monitoring
sudo pm2 monit
```

---

## Getting Help

### Check Documentation

- HTTPS-SETUP.md - HTTPS configuration details
- SETUP.md - Email and admin dashboard setup
- This file - Deployment guide

### View Error Logs

```bash
# Full error log
sudo pm2 logs sambandha

# Search for specific errors
sudo pm2 logs sambandha | grep ERROR

# View PM2 errors
tail -f ~/.pm2/logs/sambandha-error.log
```

### Emergency Restart

If something goes wrong:

```bash
# Stop everything
sudo pm2 stop all

# Kill PM2
sudo pm2 kill

# Start fresh
sudo pm2 start ecosystem.config.js
```

---

## After Deployment

### Notify Changes

Update your DNS records if needed:
```
A Record: sambandharestaurant.com → your.server.ip
CNAME: www.sambandharestaurant.com → sambandharestaurant.com
```

### Share Admin Access

Admin Dashboard: https://sambandharestaurant.com/admin.html

### Monitor Regularly

- Check admin dashboard for new reservations
- Monitor email for customer messages
- Keep system updated
- Review logs weekly

---

**Deployment Date:** ________________  
**SSL Certificate Expiry:** Check with `sudo certbot certificates`  
**Last Updated:** May 12, 2026
