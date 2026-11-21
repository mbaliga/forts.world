# Schlossruine Wenzersdorf

> Austria · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schlossruine-wenzersdorf-q37888402` |
| Coordinates | 48.61301, 16.41462 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.61301/16.41462)) |
| Wikidata | [Q37888402](https://www.wikidata.org/wiki/Q37888402) (CC0) |
| Wikidata class | ruin |
| Types | Schloss\|castle ruin |
| Administrative area | Gnadendorf |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `location-only`, 95 elements (marker 1, road 28, waterway 1, water 3, wall 7, building 55).

Evidence: documented 0, mapped 95, inferred 0, derived 0; heights documented 0, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2778255 historic=castle Q37888402 10 m from ledger point
- site is a site relation of 7 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (73 x 44 m)
- origin moved 16 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.61301/16.41462) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; Schloss\|castle ruin; sitelinks=1; wikidata:Q37888402 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 94 elements); data/traces/schlossruine-wenzersdorf-q37888402.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
