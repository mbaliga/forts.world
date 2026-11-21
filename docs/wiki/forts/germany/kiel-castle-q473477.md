# Kiel Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kiel-castle-q473477` |
| Coordinates | 54.3242, 10.1434 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.3242/10.1434)) |
| Wikidata | [Q473477](https://www.wikidata.org/wiki/Q473477) (CC0) |
| Wikidata class | castle |
| Types | castle\|Kulturdenkmal |
| Administrative area | Kiel |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `website` | http://www.kielerschloss.de/cms/index.php |

## What the model contains

Tier **T1**, status `outline-only`, 255 elements (outline 1, marker 10, road 173, building 62, zone 6, coastline 1, waterway 1, water 1).

Evidence: documented 0, mapped 255, inferred 0, derived 1; heights documented 49, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28081279 historic=castle Q473477 23 m from ledger point
- origin moved 22 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":56,"medianInside":2.3,"medianOutside":5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.3242/10.1434) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Kulturdenkmal; sitelinks=7; wikidata:Q473477 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 255 elements); data/traces/kiel-castle-q473477.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
