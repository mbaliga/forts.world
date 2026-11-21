# Borj Adoumoue

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `borj-adoumoue-q2374157` |
| Coordinates | 34.04244, -6.83242 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.04244/-6.83242)) |
| Wikidata | [Q2374157](https://www.wikidata.org/wiki/Q2374157) (CC0) |
| Wikidata class | fort |
| Types | fort\|bastion |
| Administrative area | Salé |
| Inception | 1261 |
| Designations | Moroccan cultural heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 37 elements (outline 1, marker 1, coastline 2, road 15, zone 2, wall 3, building 10, cliff 1, water 2).

Evidence: documented 0, mapped 37, inferred 0, derived 2; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1102721680 historic=fort Q2374157 12 m from ledger point
- origin moved 15 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":88,"medianInside":1,"medianOutside":7.9}
- sea-1: DEM check ok {"cells":6,"medianInside":4.1,"medianOutside":6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.04244/-6.83242) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|bastion; sitelinks=3; wikidata:Q2374157 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 37 elements); data/traces/borj-adoumoue-q2374157.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
