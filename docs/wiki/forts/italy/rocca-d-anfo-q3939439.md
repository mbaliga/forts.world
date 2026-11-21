# Rocca d'Anfo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-d-anfo-q3939439` |
| Coordinates | 45.77586, 10.49929 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.77586/10.49929)) |
| Wikidata | [Q3939439](https://www.wikidata.org/wiki/Q3939439) (CC0) |
| Wikidata class | fortification |
| Types | rocca |
| Administrative area | Anfo |
| Inception | 1450 |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `description` | Tour Napoleonico - ore 9.40 Tour Napoleonico - ore 14.30 Tour Serenissima - ore 15.00 |
| OSM `ruins` | yes |
| OSM `website` | https://www.roccadanfo.eu |

## What the model contains

Tier **T1**, status `outline+walls`, 393 elements (outline 1, marker 3, road 56, waterway 4, building 33, wall 69, retaining-wall 37, zone 234, cliff 12).

Evidence: documented 0, mapped 393, inferred 0, derived 0; heights documented 0, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21402150 historic=fort Q3939439 182 m from ledger point
- pruned to the outline plus 150 m: 449 -> 393 elements
- origin moved 179 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.77586/10.49929) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rocca; sitelinks=5; wikidata:Q3939439 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 393 elements); data/traces/rocca-d-anfo-q3939439.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
