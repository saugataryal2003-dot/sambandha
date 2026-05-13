# Website Cloner Skill

Clone and download complete websites locally with asset preservation.

## Features

- Download HTML, CSS, JavaScript, and media files
- Preserve site structure and relative links
- Support for multiple URL patterns
- Convert absolute URLs to relative paths
- Create offline-browsable copies
- Handle different character encodings

## Usage

### Basic Clone
```bash
python3 .claude/skills/website-cloner/scripts/clone.py --url https://example.com
```

### With Output Directory
```bash
python3 .claude/skills/website-cloner/scripts/clone.py --url https://example.com --output ./cloned-sites/example
```

### Advanced Options
```bash
python3 .claude/skills/website-cloner/scripts/clone.py \
  --url https://example.com \
  --output ./cloned-sites/example \
  --depth 2 \
  --include-css \
  --include-js \
  --include-images
```

## Options

- `--url`: Website URL to clone (required)
- `--output`: Output directory (default: ./cloned-{domain})
- `--depth`: How deep to crawl (default: 1)
- `--include-css`: Include CSS files (default: true)
- `--include-js`: Include JavaScript files (default: true)
- `--include-images`: Include image files (default: true)
- `--timeout`: Request timeout in seconds (default: 10)

## Examples

Clone Stripe:
```bash
python3 .claude/skills/website-cloner/scripts/clone.py --url https://stripe.com --output ./cloned-sites/stripe
```

Clone with depth:
```bash
python3 .claude/skills/website-cloner/scripts/clone.py --url https://example.com --depth 2 --output ./cloned-sites/example
```

## Output Structure

```
cloned-{domain}/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   ├── logo.png
│   └── ...
└── pages/
    └── ...
```
