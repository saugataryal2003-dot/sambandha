# ⚡ Quick Start - Sambandha Restaurant HTTPS Setup

## One-Command Setup (On Your Server)

```bash
ssh user@sambandharestaurant.com
cd /path/to/sambandha
sudo bash setup-https.sh
npm install
nano .env  # Add your Gmail app password
sudo pm2 start ecosystem.config.js
sudo pm2 startup && sudo pm2 save
```

That's it! Your site is live on HTTPS. ✨

---

## What Gets Set Up

| Component | Status |
|-----------|--------|
| SSL Certificate (Let's Encrypt) | ✓ Auto |
| HTTPS Support | ✓ Enabled |
| HTTP → HTTPS Redirect | ✓ Automatic |
| Auto-Renewal (90 days) | ✓ Enabled |
| Auto-Start on Reboot | ✓ Enabled |
| Admin Dashboard | ✓ Working |
| Email Notifications | ✓ Ready |

---

## Access Your Site

- **Website:** https://sambandharestaurant.com
- **Admin:** https://sambandharestaurant.com/admin.html
- **API:** https://sambandharestaurant.com/api/

---

## After Setup

### 1. Add Gmail Password

```bash
nano .env
# Change: EMAIL_PASSWORD=your_app_password_here
# To: EMAIL_PASSWORD=abcd efgh ijkl mnop
```

Get app password: https://myaccount.google.com/apppasswords

### 2. Check Status

```bash
sudo pm2 status
sudo pm2 logs sambandha
```

### 3. Test Website

1. Go to https://sambandharestaurant.com
2. Submit test reservation
3. Check email inbox

### 4. Access Admin

https://sambandharestaurant.com/admin.html

---

## Common Commands

```bash
# View all running apps
sudo pm2 list

# View logs
sudo pm2 logs sambandha

# Restart app
sudo pm2 restart sambandha

# Stop app
sudo pm2 stop sambandha

# Check certificate
sudo certbot certificates

# Check ports
sudo netstat -tlnp | grep -E ':80|:443|:3000'

# Update code
git pull origin main && npm install && sudo pm2 restart sambandha
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| HTTPS not working | Check: `sudo certbot certificates` |
| Email not sending | Add Gmail password to .env |
| Port in use | `sudo lsof -i :443` then `sudo kill -9 PID` |
| App won't start | `sudo pm2 logs sambandha` to see errors |
| Certificate expired | `sudo certbot renew` (auto-runs daily) |

---

## Files Created

- `setup-https.sh` - Automated HTTPS setup script
- `.env` - Configuration (keep secret!)
- `ecosystem.config.js` - PM2 app management
- `DEPLOYMENT.md` - Full deployment guide
- `HTTPS-SETUP.md` - HTTPS detailed guide

---

## Next Steps

1. ✓ Run setup script
2. ✓ Add Gmail password
3. ✓ Start with PM2
4. ✓ Test website
5. ✓ Access admin dashboard
6. ✓ Monitor reservations

---

**Need Help?** Read DEPLOYMENT.md or HTTPS-SETUP.md

**Ready?** Run: `sudo bash setup-https.sh`
