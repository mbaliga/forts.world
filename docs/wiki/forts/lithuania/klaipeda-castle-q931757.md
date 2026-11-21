# Klaipėda Castle

> Lithuania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `klaipeda-castle-q931757` |
| Coordinates | 55.70556, 21.12889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.70556/21.12889)) |
| Wikidata | [Q931757](https://www.wikidata.org/wiki/Q931757) (CC0) |
| Wikidata class | castle |
| Types | star fort\|Ordensburg |
| Administrative area | Klaipėda |
| Inception | 1300 |
| Wikipedia language editions | 12 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 90 elements (outline 1, marker 1, road 45, waterway 4, building 21, coastline 1, zone 12, wall 2, retaining-wall 2, water 1).

Evidence: documented 0, mapped 90, inferred 0, derived 1; heights documented 2, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1011007891 historic=yes 30 m from ledger point
- origin moved 30 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":25,"medianInside":-2.2,"medianOutside":0.4}
- 21 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.70556/21.12889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; star fort\|Ordensburg; sitelinks=12; wikidata:Q931757 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 90 elements); data/traces/klaipeda-castle-q931757.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/lithuania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
