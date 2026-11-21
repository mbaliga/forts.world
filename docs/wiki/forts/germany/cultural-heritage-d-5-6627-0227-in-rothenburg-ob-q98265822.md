# Cultural heritage D-5-6627-0227 in Rothenburg ob der Tauber

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cultural-heritage-d-5-6627-0227-in-rothenburg-ob-q98265822` |
| Coordinates | 49.37671, 10.18012 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.37671/10.18012)) |
| Wikidata | [Q98265822](https://www.wikidata.org/wiki/Q98265822) (CC0) |
| Wikidata class | fort |
| Types | fortification\|city walls\|feature |
| Administrative area | Rothenburg ob der Tauber |
| Designations | archaeological heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 242 elements (outline 1, marker 5, road 246, zone 42, waterway 1, building 416, wall 124, water 3, retaining-wall 21).

Evidence: documented 0, mapped 242, inferred 0, derived 0; heights documented 50, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/195714207 historic=citywalls 254 m from ledger point
- pruned to the outline plus 150 m: 859 -> 464 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 230 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 133 mapped (trace size budget); minor lanes are not drawn
- origin moved 254 m from the ledger point to the centre of the mapped site
- 19 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.37671/10.18012) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|city walls\|feature; sitelinks=0; wikidata:Q98265822 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 242 elements); data/traces/cultural-heritage-d-5-6627-0227-in-rothenburg-ob-q98265822.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
