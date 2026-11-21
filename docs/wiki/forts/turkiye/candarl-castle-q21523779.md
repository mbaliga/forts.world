# Çandarlı Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `candarl-castle-q21523779` |
| Coordinates | 38.93381, 26.93369 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.93381/26.93369)) |
| Wikidata | [Q21523779](https://www.wikidata.org/wiki/Q21523779) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Dikili |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 160 elements (outline 1, coastline 1, road 35, building 450, water 3).

Evidence: documented 0, mapped 160, inferred 0, derived 3; heights documented 2, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/171686486 historic=castle Q21523779 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 450 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":83,"medianInside":0,"medianOutside":5.3}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":5}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.93381/26.93369) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q21523779 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 160 elements); data/traces/candarl-castle-q21523779.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
