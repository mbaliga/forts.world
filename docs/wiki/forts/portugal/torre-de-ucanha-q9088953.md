# Torre de Ucanha

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-ucanha-q9088953` |
| Coordinates | 41.04844, -7.74729 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.04844/-7.74729)) |
| Wikidata | [Q9088953](https://www.wikidata.org/wiki/Q9088953) (CC0) |
| Wikidata class | castle |
| Types | arch bridge\|fortified tower\|cultural heritage\|bridge castle |
| Administrative area | Gouviães e Ucanha |
| Inception | 1500 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 4 |
| OSM `historic` | tower |

## What the model contains

Tier **T1**, status `outline-only`, 39 elements (outline 1, marker 1, waterway 3, road 24, zone 1, building 7, water 2).

Evidence: documented 0, mapped 39, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/459614305 historic=tower Q9088953 44 m from ledger point
- origin moved 45 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.04844/-7.74729) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; arch bridge\|fortified tower\|cultural heritage\|bridge castle; sitelinks=4; wikidata:Q9088953 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 40 elements); data/traces/torre-de-ucanha-q9088953.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 39 elements; outline osm:way/459614305 historic=tower Q9088953 44 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
