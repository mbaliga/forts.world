# Kinloch Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kinloch-castle-q281232` |
| Coordinates | 57.01357, -6.28209 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.01357/-6.28209)) |
| Wikidata | [Q281232](https://www.wikidata.org/wiki/Q281232) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|mansion |
| Administrative area | Highland |
| Inception | 1900 |
| Designations | category A listed building |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.isleofrum.com/isleofrumheritag.php |

## What the model contains

Tier **T1**, status `outline+walls`, 55 elements (outline 1, water 5, waterway 3, coastline 3, road 22, building 16, wall 4, retaining-wall 1).

Evidence: documented 0, mapped 55, inferred 0, derived 1; heights documented 14, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1229902 historic=castle Q281232 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":51,"medianInside":4.9,"medianOutside":11.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.01357/-6.28209) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|mansion; sitelinks=12; wikidata:Q281232 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 55 elements); data/traces/kinloch-castle-q281232.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
