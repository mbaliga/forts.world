#!/usr/bin/env python3
"""Read the unmodified Smith & Newton workbook into an attributed map dataset.

Requires openpyxl for read-only extraction. The original workbook remains authoritative.
"""
import hashlib, json, math, re, sys
from pathlib import Path
import openpyxl

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'data/third-party/smith-newton-2024/Smith-Newton-2024-Supplementary-Material-1.xlsx'
TARGET = ROOT / 'src/data/smith-newton-2024.json'
BOOK = openpyxl.load_workbook(SOURCE, read_only=True, data_only=True)
SHEET = BOOK['Medieval fortifications']
columns = list(next(SHEET.iter_rows(max_row=1, values_only=True)))[:15]
records = []
for rowno, row in enumerate(SHEET.iter_rows(min_row=2, values_only=True), start=2):
    if row[1] is None or not str(row[1]).strip():
        continue
    cells = list(row[:15])
    lat, lon = cells[10], cells[11]
    correction = None
    # One longitude cell contains an explicit lat,lon pair. Recover only when its
    # latitude agrees with the separate numeric latitude; retain original cells.
    if isinstance(lat, (int, float)) and isinstance(lon, str):
        match = re.fullmatch(r'\s*([+-]?\d+(?:\.\d+)?)\s*,\s*([+-]?\d+(?:\.\d+)?)\s*', lon)
        if match and abs(float(match[1])-lat) < 1e-6:
            lon = float(match[2]); correction = 'longitude recovered from matching coordinate pair in source cell'
    usable = all(isinstance(v, (int, float)) and not isinstance(v, bool) and math.isfinite(v) for v in (lat, lon)) and -90 <= lat <= 90 and -180 <= lon <= 180
    records.append({
        'id': f'smith-newton-2024-row-{rowno}', 'row': rowno, 'name': str(cells[1]).strip(),
        'country': str(cells[2] or '').strip(), 'region': str(cells[9] or '').strip(),
        'lat': lat if usable else None, 'lon': lon if usable else None,
        'coordinate_note': correction, 'source_cells': cells,
    })
BOOK.close()
assert len(records) == 3863, f'Unexpected named-row count: {len(records)}'
result = {'title':'Smith & Newton (2024), Supplementary Material 1',
          'article':'https://doi.org/10.1186/s40537-024-00962-1',
          'workbook_url':'https://media.springernature.com/original/springer-static/esm/art%3A10.1186%2Fs40537-024-00962-1/MediaObjects/40537_2024_962_MOESM1_ESM.xlsx',
          'workbook_sha256':hashlib.sha256(SOURCE.read_bytes()).hexdigest(),
          'sheet':SHEET.title,'columns':columns,'records':records}
TARGET.write_text(json.dumps(result, ensure_ascii=False, separators=(',', ':'), default=str)+'\n')
print(f'{len(records)} named records; {sum(r["lat"] is not None for r in records)} plottable, {sum(r["lat"] is None for r in records)} without usable coordinate pairs; {sum(bool(r["coordinate_note"]) for r in records)} recovered pair')
