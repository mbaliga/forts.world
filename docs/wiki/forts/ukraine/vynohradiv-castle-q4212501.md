# Vynohradiv Castle

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vynohradiv-castle-q4212501` |
| Coordinates | 48.14111, 23.05139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.14111/23.05139)) |
| Wikidata | [Q4212501](https://www.wikidata.org/wiki/Q4212501) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Vynohradiv |
| Designations | architectural monument of national significance of Ukraine |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 233 elements (outline 1, marker 1, road 50, building 154, wall 17, zone 5, waterway 1, cliff 1, retaining-wall 2).

Evidence: documented 0, mapped 233, inferred 0, derived 0; heights documented 2, inferred 0, unknown 172.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/535367156 historic=castle Q4212501 104 m from ledger point
- origin moved 104 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.14111/23.05139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q4212501 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 233 elements); data/traces/vynohradiv-castle-q4212501.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
