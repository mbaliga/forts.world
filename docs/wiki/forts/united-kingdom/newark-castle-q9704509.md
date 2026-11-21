# Newark Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `newark-castle-q9704509` |
| Coordinates | 56.2009, -2.77806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.2009/-2.77806)) |
| Wikidata | [Q9704509](https://www.wikidata.org/wiki/Q9704509) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fife |
| Designations | scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 28 elements (outline 1, coastline 1, road 11, cliff 2, building 1, zone 5, wall 6, water 1).

Evidence: documented 0, mapped 28, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5539486 historic=castle 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":222,"medianInside":1,"medianOutside":16.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.2009/-2.77806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q9704509 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 28 elements); data/traces/newark-castle-q9704509.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
