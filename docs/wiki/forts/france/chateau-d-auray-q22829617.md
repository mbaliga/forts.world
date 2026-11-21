# Château d'Auray

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-auray-q22829617` |
| Coordinates | 47.66625, -2.98028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.66625/-2.98028)) |
| Wikidata | [Q22829617](https://www.wikidata.org/wiki/Q22829617) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins |
| Administrative area | Auray |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 346 elements (outline 1, road 154, building 349, wall 46, waterway 2, zone 1, coastline 1, retaining-wall 22, cliff 1, water 2).

Evidence: documented 0, mapped 346, inferred 0, derived 2; heights documented 43, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/197223548 historic=building Q22927244 88 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 349 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 154 mapped (trace size budget); minor lanes are not drawn
- origin moved 87 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":111,"medianInside":0.2,"medianOutside":23.6}
- sea-1: DEM check failed {"cells":341,"medianInside":22.9,"medianOutside":10.8}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.66625/-2.98028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins; sitelinks=4; wikidata:Q22829617 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 346 elements); data/traces/chateau-d-auray-q22829617.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
