# Bhadra Fort

> India · Ahmedabad Municipal Corporation · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bhadra-fort-q3544561` |
| Coordinates | 23.023611, 72.581111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.023611/72.581111)) |
| Wikidata | [Q3544561](https://www.wikidata.org/wiki/Q3544561) (CC0) |
| Wikidata class | fort |
| Types | fort\|defensive wall\|Historic City of Ahmadabad |
| Administrative area | Ahmedabad Municipal Corporation |
| Inception | 1411 |
| Designations | Monument of National Importance |
| Wikipedia language editions | 9 |
| Programme catalogue | confidence high, significance rank 16; sources wikidata:Q3544561;wikidata:Q1070;smith-newton:r606 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 106 elements (outline 1, road 82, building 19, zone 3, wall 1).

Evidence: documented 0, mapped 106, inferred 0, derived 0; heights documented 7, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/843168356 historic=fort Q3544561 59 m from ledger point
- origin moved 58 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.023611/72.581111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

Alpha-V batch (2026-11-11): 10 forts spread across A-Z starting at V (seq 5/10), checked against all other batch files at push time. type=fort; confidence=high; rank=16; sources=3 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline+walls, 110 elements); data/traces/bhadra-fort-q3544561.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-16: no open plan found by the Commons search (only generic gazetteer PDFs); T2 needs ASI/Ahmedabad survey drawings. 2026-11-18 rebuilt at 300 m (110 elements). Commons search found only gazetteer/ASI report PDFs (no extracted plan). T2 needs: the Ahmedabad Bhadra plan (Baedeker 1914 / 1855 map requested for the Ahmadabad row may help).

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
