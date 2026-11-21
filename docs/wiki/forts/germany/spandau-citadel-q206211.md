# Spandau Citadel

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spandau-citadel-q206211` |
| Coordinates | 52.54096, 13.21259 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.54096/13.21259)) |
| Wikidata | [Q206211](https://www.wikidata.org/wiki/Q206211) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Berlin |
| Inception | 1594 |
| Designations | Gesamtanlage\|cultural heritage ensemble |
| Wikipedia language editions | 21 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 4 |
| OSM `description` | Festung, bis zum 19. Jahrhundert auch Gefängnis für preußische Staatsgefangene |

## What the model contains

Tier **T1**, status `outline+walls`, 370 elements (outline 1, marker 2, road 192, building 120, water 8, waterway 12, zone 24, wall 11).

Evidence: documented 0, mapped 370, inferred 0, derived 0; heights documented 20, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/4902365 historic=castle Q206211 20 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.54096/13.21259) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=21; wikidata:Q206211 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 370 elements); data/traces/spandau-citadel-q206211.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
