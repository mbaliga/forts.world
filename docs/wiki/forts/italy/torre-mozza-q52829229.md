# Torre Mozza

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-mozza-q52829229` |
| Coordinates | 39.85822, 18.1648 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.85822/18.1648)) |
| Wikidata | [Q52829229](https://www.wikidata.org/wiki/Q52829229) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|coastal tower\|Coastal towers in Salento |
| Administrative area | Torre Mozza |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 118 elements (outline 1, road 49, coastline 1, water 4, building 56, wall 7).

Evidence: documented 0, mapped 118, inferred 0, derived 1; heights documented 0, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/177203568 historic=ruins Q52829229 1 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":140,"medianInside":0,"medianOutside":-0.3}
- 12 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.85822/18.1648) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|coastal tower\|Coastal towers in Salento; sitelinks=1; wikidata:Q52829229 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 118 elements); data/traces/torre-mozza-q52829229.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
