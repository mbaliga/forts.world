# Stari grad

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stari-grad-q12642703` |
| Coordinates | 43.7025, 16.63222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.7025/16.63222)) |
| Wikidata | [Q12642703](https://www.wikidata.org/wiki/Q12642703) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Sinj |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 217 elements (outline 1, marker 14, road 66, zone 3, building 127, wall 5).

Evidence: documented 0, mapped 217, inferred 0, derived 0; heights documented 1, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39476341 historic=castle Q12642703 24 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.7025/16.63222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=4; wikidata:Q12642703 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 217 elements); data/traces/stari-grad-q12642703.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
