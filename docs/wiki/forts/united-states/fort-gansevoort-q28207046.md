# Fort Gansevoort

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-gansevoort-q28207046` |
| Coordinates | 40.73972, -74.00889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.73972/-74.00889)) |
| Wikidata | [Q28207046](https://www.wikidata.org/wiki/Q28207046) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | New York City |
| Inception | 1812 |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline-only`, 368 elements (outline 1, road 288, building 50, zone 10, coastline 5, retaining-wall 13, water 1).

Evidence: documented 0, mapped 368, inferred 0, derived 1; heights documented 47, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1023764853 historic=ruins 188 m from ledger point
- origin moved 185 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":146,"medianInside":1.7,"medianOutside":2.8}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.73972/-74.00889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q28207046 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 368 elements); data/traces/fort-gansevoort-q28207046.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
