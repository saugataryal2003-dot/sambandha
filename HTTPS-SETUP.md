# HTTPS Setup Guide for Sambandha Restaurant

This guide explains how to enable HTTPS (SSL/TLS) for your website.

## Why HTTPS?

- 🔒 Encrypts customer data (emails, phone numbers, reservation details)
- ✓ Builds trust with a secure padlock icon in browsers
- 📊 Improves SEO ranking
- 🛡️ Protects against man-in-the-middle attacks
- 📱 Required for mobile apps and some APIs

## Option 1: Let's Encrypt (FREE - Recommended)

### Prerequisites
- Your own domain (e.g., sambandha.com)
- Server with Linux/Unix
- Root or sudo access

### Step-by-Step

#### 1. Install Certbot

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
```

**Or for standalone (no web server needed):**
```bash
sudo apt-get install certbot
```

#### 2. Generate SSL Certificate

**Standalone method (simplest):**
```bash
sudo certbot certonly --standalone -d sambandha.com -d www.sambandha.com
```

**Nginx method (if using Nginx):**
```bash
sudo certbot --nginx -d sambandha.com -d www.sambandha.com
```

The certificate will be saved to:
- `/etc/letsencrypt/live/sambandha.com/fullchain.pem` (certificate)
- `/etc/letsencrypt/live/sambandha.com/privkey.pem` (private key)

#### 3. Update .env Configuration

```bash
# Edit your .env file
USE_HTTPS=true
SSL_CERT_PATH=/etc/letsencrypt/live/sambandha.com/fullchain.pem
SSL_KEY_PATH=/etc/letsencrypt/live/sambandha.com/privkey.pem
```

#### 4. Run Server with HTTPS

```bash
# Must use sudo to access ports 80 and 443
sudo node server.js
```

Or use PM2 with sudo:
```bash
sudo npm install -g pm2
sudo pm2 start server.js
sudo pm2 startup
sudo pm2 save
```

#### 5. Auto-Renewal

Let's Encrypt certificates expire after 90 days. Set up auto-renewal:

```bash
# Test renewal
sudo certbot renew --dry-run

# Auto-renewal runs daily via systemd timer (automatic on most systems)
# Or add to crontab:
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

---

## Option 2: Self-Signed Certificate (For Testing/Development)

### Quick Setup (Not for production)

```bash
# Generate self-signed certificate
openssl req -nodes -new -x509 -keyout key.pem -out cert.pem -days 365

# Update .env
USE_HTTPS=true
SSL_CERT_PATH=./cert.pem
SSL_KEY_PATH=./key.pem

# Run server
node server.js
```

**Note:** Browsers will show a warning because the certificate is not trusted.

---

## Option 3: Using Nginx as Reverse Proxy

### Benefits
- Better performance
- Easier certificate management
- Can run Node.js on port 3000 without root

### Setup

#### 1. Install Nginx
```bash
sudo apt-get install nginx
```

#### 2. Get SSL Certificate
```bash
sudo certbot certonly --webroot -w /var/www/html -d sambandha.com
```

#### 3. Configure Nginx

Create `/etc/nginx/sites-available/sambandha`:
```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name sambandha.com www.sambandha.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS server
server {
    listen 443 ssl http2;
    server_name sambandha.com www.sambandha.com;

    # SSL certificates
    ssl_certificate /etc/letsencrypt/live/sambandha.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/sambandha.com/privkey.pem;

    # Security headers
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Proxy to Node.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### 4. Enable Site
```bash
sudo ln -s /etc/nginx/sites-available/sambandha /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl restart nginx
```

#### 5. Run Node.js on Port 3000
```bash
# In .env, set:
USE_HTTPS=false
PORT=3000

# Run without sudo:
npm start
```

---

## SSL Certificate Checker

Verify your SSL certificate:

```bash
# Online checker
https://www.ssllabs.com/ssltest/

# Command line
openssl s_client -connect sambandha.com:443

# Check expiration
sudo certbot certificates
```

---

## Troubleshooting

### Certificate not found
```
Error: ENOENT: no such file or directory, open '/etc/letsencrypt/live/...'
```
**Solution:** Check paths in .env match actual certificate location

### Port 80/443 in use
```
Error: listen EACCES: permission denied 0.0.0.0:443
```
**Solution:** Use `sudo node server.js` or use Nginx reverse proxy

### Browser shows "Not Secure"
- Self-signed certificate: Expected, use Let's Encrypt for production
- Expired certificate: Run `sudo certbot renew`
- Wrong domain: Ensure certificate domain matches website URL

### Mixed Content Warning
If your site shows content over HTTP inside HTTPS:
1. Check all image URLs use relative paths (not http://...)
2. Update `script.js` to use `/api/` instead of `http://localhost:3000/api/`

---

## Quick Reference

| Task | Command |
|------|---------|
| Get certificate | `sudo certbot certonly --standalone -d domain.com` |
| Check certificate | `sudo certbot certificates` |
| Renew certificate | `sudo certbot renew` |
| Test renewal | `sudo certbot renew --dry-run` |
| Revoke certificate | `sudo certbot revoke -d domain.com` |

---

## Security Best Practices

1. ✓ Always use HTTPS on production
2. ✓ Keep certificates updated (auto-renew)
3. ✓ Use strong ciphers (TLS 1.2+)
4. ✓ Set security headers
5. ✓ Keep Node.js and dependencies updated
6. ✓ Use environment variables for secrets

---

## Support

For more information:
- Let's Encrypt: https://letsencrypt.org/
- Certbot: https://certbot.eff.org/
- Node.js HTTPS: https://nodejs.org/en/docs/guides/nodejs-https-hsts-ssl/
