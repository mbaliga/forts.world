# Château Saint-Clair

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-saint-clair-q28001405` |
| Coordinates | 46.49381, -1.79581 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.49381/-1.79581)) |
| Wikidata | [Q28001405](https://www.wikidata.org/wiki/Q28001405) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Les Sables-d'Olonne |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, road 198, water 3, building 577, zone 4, wall 45, coastline 4, retaining-wall 5, waterway 1).

Evidence: documented 0, mapped 334, inferred 0, derived 2; heights documented 2, inferred 0, unknown 169.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/267905666 historic=castle Q28001405 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 577 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 198 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":18,"medianInside":0.1,"medianOutside":8.9}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":8.5}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.49381/-1.79581) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q28001405 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/chateau-saint-clair-q28001405.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
