#!/usr/bin/env python3
"""Copy only approved public web files to Cloudflare's static asset directory."""
from pathlib import Path
import shutil
ROOT=Path(__file__).resolve().parent
PUBLIC=ROOT/'public'; DIST=ROOT/'dist'
ALLOW=['index.html','about.html','404.html','styles.css','content.js','state.js','app.js','data/land.png','robots.txt']
if DIST.exists(): shutil.rmtree(DIST)
for relative in ALLOW:
    source=PUBLIC/relative
    if not source.is_file() or source.is_symlink(): raise SystemExit(f'Missing or unsafe public file: {relative}')
    target=DIST/relative; target.parent.mkdir(parents=True,exist_ok=True); shutil.copy2(source,target)
print(f'Built {len(ALLOW)} approved files in {DIST}')
