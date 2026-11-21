# Burgruine Neu-Rettenberg

> Austria · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgruine-neu-rettenberg-q16054783` |
| Coordinates | 47.29392, 11.6447 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.29392/11.6447)) |
| Wikidata | [Q16054783](https://www.wikidata.org/wiki/Q16054783) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle ruin |
| Administrative area | Kolsassberg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 52 elements (marker 1, road 22, waterway 6, building 16, wall 5, zone 2).

Evidence: documented 0, mapped 52, inferred 0, derived 0; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6419680 historic=castle Q16054783 14 m from ledger point
- site is a site relation of 9 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (104 x 106 m)
- origin moved 15 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.29392/11.6447) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle ruin; sitelinks=2; wikidata:Q16054783 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/burgruine-neu-rettenberg-q16054783.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
