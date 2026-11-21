# Alt-Rheineck Castle Ruins

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alt-rheineck-castle-ruins-q29786747` |
| Coordinates | 47.46421, 9.58545 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.46421/9.58545)) |
| Wikidata | [Q29786747](https://www.wikidata.org/wiki/Q29786747) (CC0) |
| Wikidata class | ruin |
| Types | archaeological site\|castle ruin |
| Administrative area | Rheineck |
| Inception | 1200 |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `description` | 1746-48 erbaut für den Kaufmann Giovanni Heer. 1776-1869 Sitz der Kaufmannsfamilie Custer. Privatbesitz. (Quelle: Burgenverein.ch) |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 1, road 240, building 201, zone 4, waterway 2, wall 8).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/166218247 historic=castle Q29523932 419 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 201 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 240 mapped (trace size budget); minor lanes are not drawn
- origin moved 418 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.46421/9.58545) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; archaeological site\|castle ruin; sitelinks=2; wikidata:Q29786747 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/alt-rheineck-castle-ruins-q29786747.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
