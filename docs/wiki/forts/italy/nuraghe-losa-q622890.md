# Nuraghe Losa

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nuraghe-losa-q622890` |
| Coordinates | 40.11626, 8.7929 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.11626/8.7929)) |
| Wikidata | [Q622890](https://www.wikidata.org/wiki/Q622890) (CC0) |
| Wikidata class | fortification |
| Types | museum\|nuraghe\|Museum of the Italian Ministry of Culture\|archaeological park\|Italian national museum |
| Administrative area | Abbasanta |
| Designations | Italian national heritage |
| Wikipedia language editions | 7 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |
| OSM `website` | https://www.nuraghelosa.net/ |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, road 17, wall 6, zone 11, building 2, waterway 1).

Evidence: documented 0, mapped 38, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6798267 historic=archaeological_site Q622890 239 m from ledger point
- origin moved 240 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.11626/8.7929) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; museum\|nuraghe\|Museum of the Italian Ministry of Culture\|archaeological park\|Italian national museum; sitelinks=7; wikidata:Q622890 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/nuraghe-losa-q622890.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
