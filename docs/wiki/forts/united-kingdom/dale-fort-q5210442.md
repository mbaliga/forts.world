# Dale Fort

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dale-fort-q5210442` |
| Coordinates | 51.70292, -5.15133 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.70292/-5.15133)) |
| Wikidata | [Q5210442](https://www.wikidata.org/wiki/Q5210442) (CC0) |
| Wikidata class | fort |
| Types | artillery fort |
| Administrative area | Dale |
| Inception | 1851 |
| Designations | Grade II listed building |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.field-studies-council.org/locations/dalefort/ |

## What the model contains

Tier **T1**, status `outline+walls`, 26 elements (outline 1, road 10, coastline 2, building 4, zone 3, wall 4, cliff 1, water 1).

Evidence: documented 0, mapped 26, inferred 0, derived 1; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1050243834 historic=castle Q29496579 38 m from ledger point
- origin moved 38 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":454,"medianInside":11,"medianOutside":13.6}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.70292/-5.15133) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; artillery fort; sitelinks=2; wikidata:Q5210442 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 26 elements); data/traces/dale-fort-q5210442.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
