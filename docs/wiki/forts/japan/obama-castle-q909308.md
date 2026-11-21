# Obama Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `obama-castle-q909308` |
| Coordinates | 35.50394, 135.74575 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.50394/135.74575)) |
| Wikidata | [Q909308](https://www.wikidata.org/wiki/Q909308) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Obama |
| Inception | 1641 |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, road 43, waterway 5, coastline 1, water 4, building 215, wall 2, retaining-wall 2, zone 2).

Evidence: documented 0, mapped 275, inferred 0, derived 1; heights documented 0, inferred 0, unknown 219.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/753371763 historic=castle Q909308 35 m from ledger point
- origin moved 36 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":7,"medianInside":0.1,"medianOutside":1.7}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.50394/135.74575) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=8; wikidata:Q909308 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/obama-castle-q909308.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
