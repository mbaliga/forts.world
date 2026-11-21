# Chōshū Domain Shimonoseki Maeda Battery

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `choshu-domain-shimonoseki-maeda-battery-q105336677` |
| Coordinates | 33.97369, 130.97081 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.97369/130.97081)) |
| Wikidata | [Q105336677](https://www.wikidata.org/wiki/Q105336677) (CC0) |
| Wikidata class | ruin |
| Types | daiba\|war ruin |
| Administrative area | Shimonoseki |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 31 elements (outline 1, marker 4, road 19, coastline 1, waterway 4, water 2).

Evidence: documented 0, mapped 31, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1363529011 historic=fort Q105336677 20 m from ledger point
- origin moved 19 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":1,"medianInside":4.4,"medianOutside":7.2}
- sea-1: DEM check ok {"cells":140,"medianInside":0.8,"medianOutside":9.4}
- 14 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.97369/130.97081) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; daiba\|war ruin; sitelinks=2; wikidata:Q105336677 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 31 elements); data/traces/choshu-domain-shimonoseki-maeda-battery-q105336677.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
