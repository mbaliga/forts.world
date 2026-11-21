# Bonlez Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bonlez-castle-q4942143` |
| Coordinates | 50.70951, 4.6959 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.70951/4.6959)) |
| Wikidata | [Q4942143](https://www.wikidata.org/wiki/Q4942143) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Chaumont-Gistoux |
| Inception | C17 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 79 elements (outline 1, road 18, waterway 5, building 31, zone 16, wall 8).

Evidence: documented 0, mapped 79, inferred 0, derived 0; heights documented 2, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/152038061 historic=castle Q4942143 35 m from ledger point
- origin moved 34 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.70951/4.6959) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q4942143 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 74 elements); data/traces/bonlez-castle-q4942143.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 79 elements; outline osm:way/152038061 historic=castle Q4942143 35 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
