# Fortifications of Klundert

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-of-klundert-q2372569` |
| Coordinates | 51.66294, 4.5348 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.66294/4.5348)) |
| Wikidata | [Q2372569](https://www.wikidata.org/wiki/Q2372569) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|fort |
| Administrative area | Moerdijk |
| Inception | 1588 |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 363 elements (outline 1, marker 3, road 290, zone 58, water 11, building 1798, waterway 14, retaining-wall 6).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 0, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/960096657 historic=castle Q2372569 53 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1798 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 290 mapped (trace size budget); minor lanes are not drawn
- origin moved 52 m from the ledger point to the centre of the mapped site
- 26 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.66294/4.5348) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|fort; sitelinks=2; wikidata:Q2372569 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 363 elements); data/traces/fortifications-of-klundert-q2372569.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
