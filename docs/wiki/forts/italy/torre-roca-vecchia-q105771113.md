# Torre Roca Vecchia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-roca-vecchia-q105771113` |
| Coordinates | 40.28841, 18.42779 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.28841/18.42779)) |
| Wikidata | [Q105771113](https://www.wikidata.org/wiki/Q105771113) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Melendugno |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `description` | Torre di guardia smantellata da Ferrante Loffredo nel 1544, per ordine di Carlo V. / Torre vigía desmantelada por Ferrante Loffredo, en 1544, por orden de Carlos V. |

## What the model contains

Tier **T1**, status `outline-only`, 23 elements (outline 1, zone 7, coastline 5, road 7, building 1, water 2).

Evidence: documented 0, mapped 23, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/262529852 historic=ruins Q105771113 1 m from ledger point
- island ring (455 m2) cut out of sea-0
- island ring (1402 m2) cut out of sea-0
- sea-0: DEM check ok {"cells":291,"medianInside":0,"medianOutside":1.1}
- sea-1: DEM check failed {"cells":398,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.28841/18.42779) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=1; wikidata:Q105771113 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 23 elements); data/traces/torre-roca-vecchia-q105771113.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
