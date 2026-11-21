# King's Gate in Szczecin

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `king-s-gate-in-szczecin-q9178761` |
| Coordinates | 53.42839, 14.55671 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.42839/14.55671)) |
| Wikidata | [Q9178761](https://www.wikidata.org/wiki/Q9178761) (CC0) |
| Wikidata class | fortification |
| Types | gate\|city gate\|architectural heritage monument |
| Administrative area | Szczecin |
| Inception | 1728 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `description` | Pałac Klasycystyczny |
| OSM `website` | https://www.zsm2.szczecin.pl/index.php |

## What the model contains

Tier **T1**, status `outline+walls`, 400 elements (outline 1, marker 7, road 353, waterway 1, building 142, zone 101, wall 19, retaining-wall 1).

Evidence: documented 0, mapped 400, inferred 0, derived 0; heights documented 127, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/53222662 historic=castle Q11814784 268 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 142 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 353 mapped (trace size budget); minor lanes are not drawn
- origin moved 268 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.42839/14.55671) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate\|city gate\|architectural heritage monument; sitelinks=7; wikidata:Q9178761 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 400 elements); data/traces/king-s-gate-in-szczecin-q9178761.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
