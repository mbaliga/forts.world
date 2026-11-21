# Bollwerkturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bollwerkturm-q111725280` |
| Coordinates | 50.04225, 8.98114 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.04225/8.98114)) |
| Wikidata | [Q111725280](https://www.wikidata.org/wiki/Q111725280) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Seligenstadt |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | yes |
| OSM `description` | Wehrturm der Stadtmauer |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 3, road 177, building 141, wall 15, zone 22, retaining-wall 1, waterway 1).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 6, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/193433098 historic=yes Q111725280 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- 19 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.04225/8.98114) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=1; wikidata:Q111725280 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/bollwerkturm-q111725280.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
