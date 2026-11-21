# Torre de l'Estela

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-l-estela-q22954278` |
| Coordinates | 42.53087, 3.07704 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.53087/3.07704)) |
| Wikidata | [Q22954278](https://www.wikidata.org/wiki/Q22954278) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Collioure |
| Designations | classified historical monument |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 103 elements (outline 1, coastline 1, road 58, building 36, retaining-wall 1, zone 3, cliff 1, wall 1, water 1).

Evidence: documented 0, mapped 103, inferred 0, derived 1; heights documented 0, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63015040 historic=fort Q22954278 188 m from ledger point
- origin moved 190 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":15,"medianInside":0,"medianOutside":44.8}
- 18 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.53087/3.07704) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=0; wikidata:Q22954278 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 103 elements); data/traces/torre-de-l-estela-q22954278.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
