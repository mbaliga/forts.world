# Château de Bélon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-belon-q59290997` |
| Coordinates | 47.81436, -3.70562 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.81436/-3.70562)) |
| Wikidata | [Q59290997](https://www.wikidata.org/wiki/Q59290997) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Riec-sur-Bélon |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 43 elements (outline 1, road 11, zone 1, building 22, waterway 2, coastline 2, wall 1, water 3).

Evidence: documented 0, mapped 43, inferred 0, derived 2; heights documented 0, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/126534159 historic=castle Q59290997 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":274,"medianInside":0,"medianOutside":12.9}
- sea-1: DEM check ok {"cells":377,"medianInside":0.1,"medianOutside":1.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.81436/-3.70562) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=1; wikidata:Q59290997 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 43 elements); data/traces/chateau-de-belon-q59290997.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
