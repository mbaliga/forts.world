# Castle Kochberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-kochberg-q2241894` |
| Coordinates | 50.7765, 11.35737 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7765/11.35737)) |
| Wikidata | [Q2241894](https://www.wikidata.org/wiki/Q2241894) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Uhlstädt-Kirchhasel |
| Designations | Heritage monument in Thuringia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 256 elements (outline 1, marker 1, road 87, water 3, building 155, retaining-wall 3, waterway 1, zone 4, wall 1).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 5, inferred 0, unknown 154.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/143896589 historic=castle Q2241894 12 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7765/11.35737) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=3; wikidata:Q2241894 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 256 elements); data/traces/castle-kochberg-q2241894.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
