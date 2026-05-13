#!/usr/bin/env python3
"""Website cloner - Download complete websites locally."""

import argparse
import os
import sys
from urllib.parse import urljoin, urlparse
from pathlib import Path
import requests
from bs4 import BeautifulSoup

def sanitize_filename(filename):
    """Remove/replace invalid filename characters."""
    invalid_chars = '<>:"/\\|?*'
    for char in invalid_chars:
        filename = filename.replace(char, '_')
    return filename

def get_domain_from_url(url):
    """Extract domain from URL."""
    parsed = urlparse(url)
    return parsed.netloc.replace('www.', '')

def download_file(url, output_path, timeout=10):
    """Download a file from URL."""
    try:
        response = requests.get(url, timeout=timeout, stream=True)
        response.raise_for_status()

        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        with open(output_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)

        return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def process_html(html_content, base_url, output_dir, options):
    """Process HTML content and download referenced assets."""
    soup = BeautifulSoup(html_content, 'html.parser')

    # Process stylesheets
    if options.get('include_css', True):
        for link in soup.find_all('link', rel='stylesheet'):
            href = link.get('href')
            if href:
                asset_url = urljoin(base_url, href)
                asset_path = os.path.join(output_dir, 'css', sanitize_filename(href.split('/')[-1]))
                if download_file(asset_url, asset_path):
                    link['href'] = os.path.relpath(asset_path, output_dir)

    # Process images
    if options.get('include_images', True):
        for img in soup.find_all('img'):
            src = img.get('src')
            if src:
                asset_url = urljoin(base_url, src)
                asset_path = os.path.join(output_dir, 'images', sanitize_filename(src.split('/')[-1]))
                if download_file(asset_url, asset_path):
                    img['src'] = os.path.relpath(asset_path, output_dir)

    # Process scripts
    if options.get('include_js', True):
        for script in soup.find_all('script', src=True):
            src = script.get('src')
            if src:
                asset_url = urljoin(base_url, src)
                asset_path = os.path.join(output_dir, 'js', sanitize_filename(src.split('/')[-1]))
                if download_file(asset_url, asset_path):
                    script['src'] = os.path.relpath(asset_path, output_dir)

    return str(soup.prettify())

def clone_website(url, output_dir=None, options=None):
    """Clone a website recursively."""
    if options is None:
        options = {}

    if output_dir is None:
        domain = get_domain_from_url(url)
        output_dir = f"cloned-{domain}"

    os.makedirs(output_dir, exist_ok=True)

    print(f"Cloning {url}...")
    print(f"Output directory: {output_dir}")

    try:
        # Download main page
        response = requests.get(url, timeout=options.get('timeout', 10))
        response.raise_for_status()

        # Process HTML and download assets
        processed_html = process_html(response.content.decode('utf-8', errors='ignore'), url, output_dir, options)

        # Save main page
        index_path = os.path.join(output_dir, 'index.html')
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(processed_html)

        print(f"✓ Successfully cloned to {output_dir}")
        return True

    except Exception as e:
        print(f"Error cloning website: {e}")
        return False

def main():
    parser = argparse.ArgumentParser(description='Clone websites locally')
    parser.add_argument('--url', required=True, help='Website URL to clone')
    parser.add_argument('--output', help='Output directory')
    parser.add_argument('--depth', type=int, default=1, help='Crawl depth')
    parser.add_argument('--include-css', action='store_true', default=True, help='Include CSS files')
    parser.add_argument('--include-js', action='store_true', default=True, help='Include JS files')
    parser.add_argument('--include-images', action='store_true', default=True, help='Include images')
    parser.add_argument('--timeout', type=int, default=10, help='Request timeout')

    args = parser.parse_args()

    options = {
        'include_css': args.include_css,
        'include_js': args.include_js,
        'include_images': args.include_images,
        'timeout': args.timeout,
    }

    success = clone_website(args.url, args.output, options)
    sys.exit(0 if success else 1)

if __name__ == '__main__':
    main()
