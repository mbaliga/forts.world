# Doornenburg Castle

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `doornenburg-castle-q2012221` |
| Coordinates | 51.89402, 5.99921 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.89402/5.99921)) |
| Wikidata | [Q2012221](https://www.wikidata.org/wiki/Q2012221) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|château |
| Administrative area | Lingewaard |
| Inception | 1400 |
| Designations | Rijksmonument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://www.kasteeldoornenburg.nl |

## What the model contains

Tier **T1**, status `outline+walls`, 260 elements (outline 1, road 70, building 151, zone 29, water 6, waterway 1, wall 2).

Evidence: documented 0, mapped 260, inferred 0, derived 0; heights documented 2, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/604437614 historic=castle Q2012221 18 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.89402/5.99921) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|château; sitelinks=10; wikidata:Q2012221 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 260 elements); data/traces/doornenburg-castle-q2012221.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
