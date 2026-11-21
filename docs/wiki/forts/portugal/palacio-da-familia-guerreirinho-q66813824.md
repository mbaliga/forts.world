# Palácio da Familia Guerreirinho

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-da-familia-guerreirinho-q66813824` |
| Coordinates | 37.01947, -7.93807 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.01947/-7.93807)) |
| Wikidata | [Q66813824](https://www.wikidata.org/wiki/Q66813824) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|cultural heritage\|mansion |
| Administrative area | Faro (Sé e São Pedro) |
| Designations | heritage without legal protection |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 346 elements (outline 1, road 105, waterway 1, building 231, coastline 1, wall 5, water 2).

Evidence: documented 0, mapped 346, inferred 0, derived 2; heights documented 3, inferred 0, unknown 233.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1321543326 historic=castle Q66813824 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":4,"medianInside":1.1,"medianOutside":10.9}
- sea-1: DEM check ok {"cells":2,"medianInside":0.2,"medianOutside":10.9}
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.01947/-7.93807) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|cultural heritage\|mansion; sitelinks=1; wikidata:Q66813824 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 346 elements); data/traces/palacio-da-familia-guerreirinho-q66813824.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
