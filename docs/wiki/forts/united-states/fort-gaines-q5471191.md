# Fort Gaines

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-gaines-q5471191` |
| Coordinates | 30.24833, -88.07694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/30.24833/-88.07694)) |
| Wikidata | [Q5471191](https://www.wikidata.org/wiki/Q5471191) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Dauphin Island |
| Inception | 1821 |
| Designations | National Register of Historic Places listed place\|America's Most Endangered Historic Places |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 64 elements (outline 1, road 34, building 18, zone 1, coastline 4, water 5).

Evidence: documented 0, mapped 64, inferred 0, derived 3; heights documented 1, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/117976496 historic=fort 136 m from ledger point
- origin moved 139 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":212,"medianInside":-2,"medianOutside":4}
- sea-1: DEM check ok {"cells":6,"medianInside":1.4,"medianOutside":2.6}
- sea-2: DEM check ok {"cells":576,"medianInside":2.6,"medianOutside":null}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/30.24833/-88.07694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q5471191 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 64 elements); data/traces/fort-gaines-q5471191.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
