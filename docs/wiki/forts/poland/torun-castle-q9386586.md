# Toruń Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torun-castle-q9386586` |
| Coordinates | 53.00937, 18.61094 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.00937/18.61094)) |
| Wikidata | [Q9386586](https://www.wikidata.org/wiki/Q9386586) (CC0) |
| Wikidata class | castle |
| Types | castle\|Ordensburg |
| Administrative area | Toruń |
| Inception | 1236 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.tak.torun.pl/en/castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 239 elements (outline 1, marker 3, road 553, water 1, wall 69, building 239, zone 130, waterway 11, retaining-wall 1).

Evidence: documented 0, mapped 239, inferred 0, derived 0; heights documented 18, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/80579965 historic=castle Q9386586 23 m from ledger point
- pruned to the outline plus 80 m: 1008 -> 332 elements
- roads capped: kept the 80 longest of 173 mapped (trace size budget); minor lanes are not drawn
- origin moved 24 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.00937/18.61094) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Ordensburg; sitelinks=12; wikidata:Q9386586 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/torun-castle-q9386586.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
