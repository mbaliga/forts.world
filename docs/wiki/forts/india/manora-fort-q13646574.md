# Manora Fort

> India · Thanjavur district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manora-fort-q13646574` |
| Coordinates | 10.268, 79.304 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.268/79.304)) |
| Wikidata | [Q13646574](https://www.wikidata.org/wiki/Q13646574) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Thanjavur district |
| Designations | State Protected Monument |
| Wikipedia language editions | 3 |
| Programme catalogue | confidence high, significance rank 547; sources wikidata:Q13646574;smith-newton:r216 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 40 elements (outline 1, wall 1, road 10, waterway 1, water 1, building 25, coastline 1).

Evidence: documented 0, mapped 40, inferred 0, derived 0; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/555516027 historic=castle Q13646574 134 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 138 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.268/79.304) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

Alpha-D batch (2026-11-14): 10 forts spread across A-Z starting at D (batch-alpha-D.csv). type=fort; confidence=high; rank=547; sources=2 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline+walls, 40 elements); data/traces/manora-fort-q13646574.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
