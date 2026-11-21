# Fort Edgecomb

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-edgecomb-q5471112` |
| Coordinates | 43.99361, -69.65722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.99361/-69.65722)) |
| Wikidata | [Q5471112](https://www.wikidata.org/wiki/Q5471112) (CC0) |
| Wikidata class | fort |
| Types | blockhouse\|historic district |
| Administrative area | Edgecomb |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 31 elements (outline 1, road 8, coastline 2, waterway 1, building 18, water 1).

Evidence: documented 0, mapped 31, inferred 0, derived 1; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1119485176 historic=fort Q5471112 50 m from ledger point
- origin moved 50 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":229,"medianInside":4,"medianOutside":8.3}
- 35 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.99361/-69.65722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; blockhouse\|historic district; sitelinks=2; wikidata:Q5471112 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 31 elements); data/traces/fort-edgecomb-q5471112.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
