# Fort van Sint-Filips

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-van-sint-filips-q2191373` |
| Coordinates | 51.25975, 4.3077 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.25975/4.3077)) |
| Wikidata | [Q2191373](https://www.wikidata.org/wiki/Q2191373) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Antwerp |
| Designations | vastgesteld bouwkundig erfgoed |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 4 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 10 elements (outline 1, road 8, waterway 1).

Evidence: documented 0, mapped 10, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1182287082 historic=fort Q2191373 66 m from ledger point
- origin moved 65 m from the ledger point to the outline centroid
- 45 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.25975/4.3077) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q2191373 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 10 elements); data/traces/fort-van-sint-filips-q2191373.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
