module.exports = {
  apps: [{
    name: 'sambandha',
    script: './server.js',
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production'
    },
    // Auto restart on file changes
    watch: false,
    // Restart if memory usage exceeds 500MB
    max_memory_restart: '500M',
    // Auto restart on crash
    autorestart: true,
    // Max restart attempts
    max_restarts: 10,
    // Time between restarts
    min_uptime: '10s',
    // Error logs
    error_file: './logs/error.log',
    // Output logs
    out_file: './logs/out.log',
    // Combined logs
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
  }]
};
