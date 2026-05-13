#!/usr/bin/env python3
"""Search and analyze cloned websites."""

import argparse
import os
import json
from pathlib import Path
from urllib.parse import urljoin

def search_cloned_sites(query=None, output_dir=None):
    """Search through cloned websites."""
    if output_dir is None:
        output_dir = "."

    results = []

    for root, dirs, files in os.walk(output_dir):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)

                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()

                        if query is None or query.lower() in content.lower():
                            results.append({
                                'file': file_path,
                                'size': os.path.getsize(file_path),
                                'type': 'html'
                            })
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")

    return results

def list_cloned_sites(base_dir="."):
    """List all cloned websites."""
    cloned = []

    for item in os.listdir(base_dir):
        if item.startswith('cloned-') and os.path.isdir(os.path.join(base_dir, item)):
            site_dir = os.path.join(base_dir, item)
            index_file = os.path.join(site_dir, 'index.html')

            if os.path.exists(index_file):
                cloned.append({
                    'name': item,
                    'path': site_dir,
                    'size': sum(
                        os.path.getsize(os.path.join(dirpath, filename))
                        for dirpath, _, filenames in os.walk(site_dir)
                        for filename in filenames
                    ) // 1024  # KB
                })

    return cloned

def main():
    parser = argparse.ArgumentParser(description='Search cloned websites')
    parser.add_argument('query', nargs='?', help='Search query')
    parser.add_argument('--list', action='store_true', help='List all cloned sites')
    parser.add_argument('--output', default='.', help='Output directory')
    parser.add_argument('--json', action='store_true', help='Output as JSON')

    args = parser.parse_args()

    if args.list:
        sites = list_cloned_sites(args.output)
        if args.json:
            print(json.dumps(sites, indent=2))
        else:
            if not sites:
                print("No cloned websites found.")
            else:
                print(f"Found {len(sites)} cloned website(s):")
                for site in sites:
                    print(f"  - {site['name']} ({site['size']} KB)")
    else:
        results = search_cloned_sites(args.query, args.output)
        if args.json:
            print(json.dumps(results, indent=2))
        else:
            if not results:
                print(f"No results found for '{args.query}'")
            else:
                print(f"Found {len(results)} matching file(s):")
                for result in results:
                    print(f"  - {result['file']}")

if __name__ == '__main__':
    main()
