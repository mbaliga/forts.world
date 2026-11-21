# Torre del Fiume

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-fiume-q52829428` |
| Coordinates | 40.12513, 17.99712 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.12513/17.99712)) |
| Wikidata | [Q52829428](https://www.wikidata.org/wiki/Q52829428) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Nardò |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 152 elements (outline 1, road 58, building 67, coastline 1, zone 11, wall 12, water 2).

Evidence: documented 0, mapped 152, inferred 0, derived 1; heights documented 0, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8336856 historic=ruins Q52829428 1 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":150,"medianInside":0,"medianOutside":5.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.12513/17.99712) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=1; wikidata:Q52829428 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 152 elements); data/traces/torre-del-fiume-q52829428.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
