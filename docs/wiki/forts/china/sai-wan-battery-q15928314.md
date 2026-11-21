# Sai Wan Battery

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sai-wan-battery-q15928314` |
| Coordinates | 22.2731, 114.23496 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.2731/114.23496)) |
| Wikidata | [Q15928314](https://www.wikidata.org/wiki/Q15928314) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Hong Kong |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `website` | https://www.lcsd.gov.hk/camp/b5/p_lymp.php |

## What the model contains

Tier **T1**, status `outline+walls`, 224 elements (outline 1, road 105, building 89, waterway 2, wall 1, zone 6, cliff 19, retaining-wall 1).

Evidence: documented 0, mapped 224, inferred 0, derived 0; heights documented 24, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/557930264 historic=fort Q16868552 500 m from ledger point
- origin moved 492 m from the ledger point to the outline centroid
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.2731/114.23496) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q15928314 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 224 elements); data/traces/sai-wan-battery-q15928314.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
