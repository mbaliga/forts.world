# Fort Shirley

> Dominica · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-shirley-q65123003` |
| Coordinates | 15.5834, -61.4734 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.5834/-61.4734)) |
| Wikidata | [Q65123003](https://www.wikidata.org/wiki/Q65123003) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Saint John Parish |
| Designations | Tentative World Heritage Site |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 44 elements (outline 1, marker 2, road 22, coastline 1, building 11, wall 6, water 1).

Evidence: documented 0, mapped 44, inferred 0, derived 1; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/750939951 historic=fort Q65123003 14 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":75,"medianInside":8.5,"medianOutside":48}
- 47 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.5834/-61.4734) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q65123003 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 44 elements); data/traces/fort-shirley-q65123003.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/dominica.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
