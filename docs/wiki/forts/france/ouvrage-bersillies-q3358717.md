# Ouvrage Bersillies

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ouvrage-bersillies-q3358717` |
| Coordinates | 50.32708, 4.00644 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.32708/4.00644)) |
| Wikidata | [Q3358717](https://www.wikidata.org/wiki/Q3358717) (CC0) |
| Wikidata class | fortification |
| Types | petit ouvrage |
| Administrative area | Bersillies |
| Inception | 1934 |
| Wikipedia language editions | 3 |
| OSM `historic` | bunker |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 31 elements (outline 1, marker 2, zone 8, road 14, building 3, wall 3).

Evidence: documented 0, mapped 31, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20079208 historic=bunker Q3358717 43 m from ledger point
- origin moved 42 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.32708/4.00644) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; petit ouvrage; sitelinks=3; wikidata:Q3358717 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 36 elements); data/traces/ouvrage-bersillies-q3358717.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 31 elements; outline osm:relation/20079208 historic=bunker Q3358717 43 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
