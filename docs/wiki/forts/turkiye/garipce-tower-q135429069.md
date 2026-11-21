# Garipçe Tower

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `garipce-tower-q135429069` |
| Coordinates | 41.21373, 29.10744 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.21373/29.10744)) |
| Wikidata | [Q135429069](https://www.wikidata.org/wiki/Q135429069) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Sarıyer |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 145 elements (outline 1, marker 1, road 8, coastline 1, building 75, zone 15, wall 42, cliff 1, water 1).

Evidence: documented 0, mapped 145, inferred 0, derived 1; heights documented 0, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1526838047 historic=castle 251 m from ledger point
- origin moved 252 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":272,"medianInside":0,"medianOutside":17.2}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.21373/29.10744) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q135429069 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 145 elements); data/traces/garipce-tower-q135429069.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
