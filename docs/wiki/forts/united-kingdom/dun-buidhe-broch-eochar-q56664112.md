# Dun Buidhe,broch,Eochar

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-buidhe-broch-eochar-q56664112` |
| Coordinates | 57.39221, -7.37272 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.39221/-7.37272)) |
| Wikidata | [Q56664112](https://www.wikidata.org/wiki/Q56664112) (CC0) |
| Wikidata class | fortification |
| Types | broch |
| Administrative area | Outer Hebrides |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 44 elements (outline 1, marker 1, road 9, coastline 1, water 3, building 8, zone 10, wall 11).

Evidence: documented 0, mapped 44, inferred 0, derived 2; heights documented 4, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19126304 historic=archaeological_site Q56664112 6 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":400,"medianInside":1.9,"medianOutside":1.8}
- sea-1: DEM check ok {"cells":4,"medianInside":0.3,"medianOutside":1.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.39221/-7.37272) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch; sitelinks=0; wikidata:Q56664112 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 44 elements); data/traces/dun-buidhe-broch-eochar-q56664112.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
