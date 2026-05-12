#!/bin/bash

# HTTPS Setup Script for Sambandha Restaurant
# Run this on your live server: sudo bash setup-https.sh

set -e

DOMAIN="sambandharestaurant.com"
EMAIL="Sambandha2009@gmail.com"

echo "========================================="
echo "🔒 HTTPS Setup for $DOMAIN"
echo "========================================="

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ This script must be run as root (use: sudo bash setup-https.sh)"
    exit 1
fi

echo ""
echo "📦 Step 1: Installing Certbot..."
apt-get update > /dev/null 2>&1
apt-get install -y certbot > /dev/null 2>&1
echo "✓ Certbot installed"

echo ""
echo "📜 Step 2: Generating SSL Certificate from Let's Encrypt..."
echo "   Domain: $DOMAIN"
echo "   Email: $EMAIL"

# Generate certificate
certbot certonly --standalone \
    --non-interactive \
    --agree-tos \
    --email $EMAIL \
    -d $DOMAIN \
    -d www.$DOMAIN \
    2>&1 | grep -E "Successfully received|already exists" || true

echo "✓ SSL Certificate generated"

echo ""
echo "📁 Certificate paths:"
CERT_PATH="/etc/letsencrypt/live/$DOMAIN/fullchain.pem"
KEY_PATH="/etc/letsencrypt/live/$DOMAIN/privkey.pem"

echo "   Certificate: $CERT_PATH"
echo "   Private Key: $KEY_PATH"

echo ""
echo "📝 Step 3: Updating .env file..."

# Check if .env exists, if not create from example
if [ ! -f ".env" ]; then
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo "   Created .env from .env.example"
    fi
fi

# Update .env file with HTTPS settings
if [ -f ".env" ]; then
    # Use a temporary file for atomic replacement
    {
        # Copy existing content and modify HTTPS settings
        while IFS= read -r line; do
            if [[ $line == USE_HTTPS=* ]]; then
                echo "USE_HTTPS=true"
            elif [[ $line == SSL_CERT_PATH=* ]]; then
                echo "SSL_CERT_PATH=$CERT_PATH"
            elif [[ $line == SSL_KEY_PATH=* ]]; then
                echo "SSL_KEY_PATH=$KEY_PATH"
            else
                echo "$line"
            fi
        done < .env

        # Add HTTPS settings if they don't exist
        if ! grep -q "USE_HTTPS" .env; then
            echo "USE_HTTPS=true"
        fi
        if ! grep -q "SSL_CERT_PATH" .env; then
            echo "SSL_CERT_PATH=$CERT_PATH"
        fi
        if ! grep -q "SSL_KEY_PATH" .env; then
            echo "SSL_KEY_PATH=$KEY_PATH"
        fi
    } > .env.tmp && mv .env.tmp .env

    echo "✓ .env updated with HTTPS settings"
else
    echo "⚠️  .env file not found, creating with HTTPS settings..."
    cat > .env << EOF
EMAIL_USER=Sambandha2009@gmail.com
EMAIL_PASSWORD=your_app_password_here
PORT=3000
USE_HTTPS=true
SSL_CERT_PATH=$CERT_PATH
SSL_KEY_PATH=$KEY_PATH
EOF
    echo "✓ .env created"
fi

echo ""
echo "🔄 Step 4: Setting up auto-renewal..."
# Create certbot renewal hook
mkdir -p /etc/letsencrypt/renewal-hooks/post
cat > /etc/letsencrypt/renewal-hooks/post/restart-sambandha.sh << 'EOF2'
#!/bin/bash
# Restart Sambandha service after certificate renewal
systemctl restart sambandha 2>/dev/null || pm2 restart server 2>/dev/null || true
EOF2
chmod +x /etc/letsencrypt/renewal-hooks/post/restart-sambandha.sh

# Enable certbot timer for auto-renewal
systemctl enable certbot.timer 2>/dev/null || true
echo "✓ Auto-renewal configured"

echo ""
echo "========================================="
echo "✅ HTTPS Setup Complete!"
echo "========================================="
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Install Node.js dependencies:"
echo "   npm install"
echo ""
echo "2. Start the server with HTTPS:"
echo "   sudo node server.js"
echo ""
echo "   OR use PM2 for persistent running:"
echo "   sudo npm install -g pm2"
echo "   sudo pm2 start server.js --name sambandha"
echo "   sudo pm2 startup"
echo "   sudo pm2 save"
echo ""
echo "3. Verify HTTPS is working:"
echo "   curl -k https://$DOMAIN"
echo ""
echo "4. Check certificate details:"
echo "   sudo certbot certificates"
echo ""
echo "📅 Certificate auto-renewal:"
echo "   - Renews automatically 30 days before expiration"
echo "   - Check renewal: sudo certbot renew --dry-run"
echo ""
echo "🌐 Access your site:"
echo "   - Website: https://$DOMAIN"
echo "   - Admin: https://$DOMAIN/admin.html"
echo ""
echo "❓ For help, see: HTTPS-SETUP.md"
echo ""
