# Gurre Castle

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gurre-castle-q3431547` |
| Coordinates | 56.0195, 12.50525 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.0195/12.50525)) |
| Wikidata | [Q3431547](https://www.wikidata.org/wiki/Q3431547) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Helsingør Municipality |
| Inception | 1150 |
| Designations | monument on Kulturstyrelsen register\|protected ancient monument in Denmark |
| Wikipedia language editions | 9 |
| OSM `historic` | archaeological_site |
| OSM `website` | https://www.kulturarv.dk/fundogfortidsminder/Lokalitet/165478/ |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, road 7, zone 6, water 1, waterway 4, wall 16, building 3).

Evidence: documented 0, mapped 38, inferred 0, derived 0; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/400187250 historic=archaeological_site Q3431547 5 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.0195/12.50525) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=9; wikidata:Q3431547 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/gurre-castle-q3431547.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
