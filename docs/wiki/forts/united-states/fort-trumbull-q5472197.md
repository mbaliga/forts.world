# Fort Trumbull

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-trumbull-q5472197` |
| Coordinates | 41.3437, -72.0934 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.3437/-72.0934)) |
| Wikidata | [Q5472197](https://www.wikidata.org/wiki/Q5472197) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Connecticut |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `website` | https://portal.ct.gov/DEEP/State-Parks/Parks/Fort-Trumbull-State-Park |

## What the model contains

Tier **T1**, status `outline+walls`, 114 elements (outline 1, marker 2, road 46, building 13, wall 8, zone 23, coastline 2, retaining-wall 14, cliff 2, water 3).

Evidence: documented 0, mapped 114, inferred 0, derived 3; heights documented 0, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12280438 historic=fort Q5472197 7 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":3,"medianInside":2,"medianOutside":2}
- sea-1: DEM check ok {"cells":5,"medianInside":0.2,"medianOutside":2}
- sea-2: DEM check ok {"cells":110,"medianInside":-4.4,"medianOutside":2.5}
- 339 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.3437/-72.0934) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5472197 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 114 elements); data/traces/fort-trumbull-q5472197.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
