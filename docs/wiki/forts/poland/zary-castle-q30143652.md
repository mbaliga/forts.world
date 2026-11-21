# Żary Castle

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zary-castle-q30143652` |
| Coordinates | 51.63991, 15.14149 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.63991/15.14149)) |
| Wikidata | [Q30143652](https://www.wikidata.org/wiki/Q30143652) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Żary |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `description` | https://www.youtube.com/watch?v=Z-YTBB_VGjg |
| OSM `website` | https://wrotalubuskie.eu/PL/obiekt_turystyczny/szczegoly/524/279/Zamek_Dewinow_-_Bibersteinow_w_Zarach/ |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 1, road 211, building 184, zone 60, waterway 1, water 2, wall 10, retaining-wall 8).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 2, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7793868 historic=castle Q11814840 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 184 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 211 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.63991/15.14149) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q30143652 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/zary-castle-q30143652.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
