# Fort Rodman

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-rodman-q5472161` |
| Coordinates | 41.59306, -70.90139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.59306/-70.90139)) |
| Wikidata | [Q5472161](https://www.wikidata.org/wiki/Q5472161) (CC0) |
| Wikidata class | fort |
| Types | artillery fort\|historic district |
| Administrative area | New Bedford |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `website` | https://forttaber.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 80 elements (outline 1, marker 3, road 43, coastline 1, building 16, wall 1, zone 14, water 1).

Evidence: documented 0, mapped 80, inferred 0, derived 1; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2852909 historic=fort 13 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":166,"medianInside":0,"medianOutside":1.8}
- 31 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.59306/-70.90139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; artillery fort\|historic district; sitelinks=1; wikidata:Q5472161 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 80 elements); data/traces/fort-rodman-q5472161.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
