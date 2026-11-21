# city wall of Berlin

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-wall-of-berlin-q821769` |
| Coordinates | 52.51685, 13.41405 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.51685/13.41405)) |
| Wikidata | [Q821769](https://www.wikidata.org/wiki/Q821769) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Bezirk Mitte |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |
| OSM `website` | https://www.berlin.de/sehenswuerdigkeiten/3561378-3558930-palais-podewil.html |

## What the model contains

Tier **T1**, status `outline+walls`, 235 elements (outline 1, marker 10, road 172, building 37, zone 6, wall 9).

Evidence: documented 0, mapped 235, inferred 0, derived 0; heights documented 22, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/43081520 historic=castle Q16642113 108 m from ledger point
- origin moved 108 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.51685/13.41405) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=4; wikidata:Q821769 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 235 elements); data/traces/city-wall-of-berlin-q821769.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
