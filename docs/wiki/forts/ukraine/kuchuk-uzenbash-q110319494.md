# Kuchuk-Uzenbash

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kuchuk-uzenbash-q110319494` |
| Coordinates | 44.43, 34.11528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.43/34.11528)) |
| Wikidata | [Q110319494](https://www.wikidata.org/wiki/Q110319494) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Autonomous Republic of Crimea |
| Inception | 1300 |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 119 elements (outline 1, marker 1, coastline 1, road 67, building 48, water 1).

Evidence: documented 0, mapped 119, inferred 0, derived 1; heights documented 23, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/227761877 historic=building Q4155907 12 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":62,"medianInside":6.9,"medianOutside":58.7}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.43/34.11528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q110319494 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 119 elements); data/traces/kuchuk-uzenbash-q110319494.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
