# Sigiburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sigiburg-q25247879` |
| Coordinates | 51.42, 7.48694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.42/7.48694)) |
| Wikidata | [Q25247879](https://www.wikidata.org/wiki/Q25247879) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|rocca |
| Administrative area | Hörde |
| Designations | architectural heritage monument |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 127 elements (outline 1, marker 2, road 103, zone 5, building 9, cliff 2, wall 5).

Evidence: documented 0, mapped 127, inferred 0, derived 0; heights documented 2, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/763233793 historic=ruins 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.42/7.48694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|rocca; sitelinks=4; wikidata:Q25247879 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 127 elements); data/traces/sigiburg-q25247879.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
