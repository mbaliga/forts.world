# Qutlaq Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `qutlaq-fortress-q12166029` |
| Coordinates | 44.82334, 34.88123 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.82334/34.88123)) |
| Wikidata | [Q12166029](https://www.wikidata.org/wiki/Q12166029) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|fort |
| Administrative area | Sudak Municipality |
| Inception | -0001 |
| Designations | State Register of Immovable Monuments of Ukraine\|federal cultural heritage site in Russia |
| Wikipedia language editions | 4 |
| OSM `historic` | building |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 28 elements (outline 1, marker 1, coastline 1, road 9, cliff 1, building 12, waterway 1, water 1).

Evidence: documented 0, mapped 28, inferred 0, derived 1; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/487096403 historic=building 2 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":63,"medianInside":4.3,"medianOutside":41}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.82334/34.88123) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|fort; sitelinks=4; wikidata:Q12166029 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 28 elements); data/traces/qutlaq-fortress-q12166029.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
