# Giessenburg

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `giessenburg-q17373653` |
| Coordinates | 51.84341, 4.86761 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.84341/4.86761)) |
| Wikidata | [Q17373653](https://www.wikidata.org/wiki/Q17373653) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle\|ruins |
| Administrative area | Giessenlanden |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `description` | Kasteelheuvel en -ruïnes van het voormalig kasteel Giessenburg |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 222 elements (outline 1, road 47, water 15, zone 34, building 349, waterway 5).

Evidence: documented 0, mapped 222, inferred 0, derived 0; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103354045 historic=ruins Q17373653 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 349 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.84341/4.86761) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle\|ruins; sitelinks=2; wikidata:Q17373653 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 222 elements); data/traces/giessenburg-q17373653.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
