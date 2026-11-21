# Fort Clinch

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-clinch-q5470932` |
| Coordinates | 30.70469, -81.45446 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/30.70469/-81.45446)) |
| Wikidata | [Q5470932](https://www.wikidata.org/wiki/Q5470932) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Nassau County |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 118 elements (outline 1, marker 11, road 86, waterway 1, building 14, coastline 1, zone 2, water 1).

Evidence: documented 0, mapped 118, inferred 0, derived 1; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/202321937 historic=fort 16 m from ledger point
- origin moved 16 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":208,"medianInside":-4,"medianOutside":6.9}
- 932 DEM cells below -3 m (bathymetry) clamped to -3 m
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/30.70469/-81.45446) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5470932 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 118 elements); data/traces/fort-clinch-q5470932.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
