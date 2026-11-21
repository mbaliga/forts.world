# Petrelë Fortress

> Albania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `petrele-fortress-q2741891` |
| Coordinates | 41.255, 19.854 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.255/19.854)) |
| Wikidata | [Q2741891](https://www.wikidata.org/wiki/Q2741891) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Petrelë |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | est 5th century to watch for Ottoman troops, dev 11th 12th centuries. |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |
| OSM `website` | https://kalajapetreles.mystrikingly.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 86 elements (outline 1, road 33, building 42, waterway 1, zone 3, wall 4, cliff 1).

Evidence: documented 0, mapped 86, inferred 0, derived 0; heights documented 0, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/246873424 historic=castle Q2741891 50 m from ledger point
- origin moved 51 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.255/19.854) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=16; wikidata:Q2741891 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 86 elements); data/traces/petrele-fortress-q2741891.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
