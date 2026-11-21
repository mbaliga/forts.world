# Château de Kérouzéré

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-kerouzere-q1987156` |
| Coordinates | 48.6725, -4.06972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.6725/-4.06972)) |
| Wikidata | [Q1987156](https://www.wikidata.org/wiki/Q1987156) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Sibiril |
| Designations | remarkable front garden\|classified historical monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 34 elements (outline 1, road 13, coastline 1, building 18, wall 1).

Evidence: documented 0, mapped 34, inferred 0, derived 0; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72410731 historic=castle Q1987156 18 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 18 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.6725/-4.06972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q1987156 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 34 elements); data/traces/chateau-de-kerouzere-q1987156.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
