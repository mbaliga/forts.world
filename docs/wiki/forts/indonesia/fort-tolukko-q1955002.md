# Fort Tolukko

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-tolukko-q1955002` |
| Coordinates | 0.81389, 127.38809 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/0.81389/127.38809)) |
| Wikidata | [Q1955002](https://www.wikidata.org/wiki/Q1955002) (CC0) |
| Wikidata class | fort |
| Types | fortification\|fort |
| Administrative area | Ternate |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 10 |
| OSM `historic` | fort |
| OSM `ruins` | yes |
| OSM `website` | https://www.atlasofmutualheritage.nl/en/page/641/hollandia-fort-tolukko |

## What the model contains

Tier **T1**, status `outline-only`, 388 elements (outline 1, road 27, waterway 1, building 357, coastline 1, water 1).

Evidence: documented 0, mapped 388, inferred 0, derived 1; heights documented 0, inferred 0, unknown 357.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1190031533 historic=fort Q1955002 1 m from ledger point
- sea-0: DEM check ok {"cells":370,"medianInside":2.4,"medianOutside":8.1}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/0.81389/127.38809) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|fort; sitelinks=10; wikidata:Q1955002 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 388 elements); data/traces/fort-tolukko-q1955002.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
