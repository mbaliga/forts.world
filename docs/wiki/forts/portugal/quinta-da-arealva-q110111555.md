# Quinta da Arealva

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `quinta-da-arealva-q110111555` |
| Coordinates | 38.68194, -9.16814 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.68194/-9.16814)) |
| Wikidata | [Q110111555](https://www.wikidata.org/wiki/Q110111555) (CC0) |
| Wikidata class | fort |
| Types | winery\|fort\|historic building |
| Administrative area | Almada |
| Inception | 1700 |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `website` | http://lugaresdealmada.blogspot.com/2012/06/da-fonte-da-pipa-arialva-passando-pelo_9413.html |

## What the model contains

Tier **T1**, status `outline+walls`, 105 elements (outline 1, marker 1, road 36, zone 5, building 35, cliff 1, wall 6, coastline 15, retaining-wall 4, water 1).

Evidence: documented 0, mapped 105, inferred 0, derived 1; heights documented 0, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9675648 historic=ruins Q110111555 48 m from ledger point
- origin moved 49 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":530,"medianInside":0,"medianOutside":74}
- 36 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.68194/-9.16814) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; winery\|fort\|historic building; sitelinks=2; wikidata:Q110111555 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 105 elements); data/traces/quinta-da-arealva-q110111555.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
