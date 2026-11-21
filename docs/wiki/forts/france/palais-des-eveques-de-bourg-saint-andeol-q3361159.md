# Palais des évêques de Bourg-Saint-Andéol

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-des-eveques-de-bourg-saint-andeol-q3361159` |
| Coordinates | 44.3724, 4.64702 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.3724/4.64702)) |
| Wikidata | [Q3361159](https://www.wikidata.org/wiki/Q3361159) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Bourg-Saint-Andéol |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `description` | Emplacement de statue (disparue) avec voute en forme de coquille St Jacques |

## What the model contains

Tier **T1**, status `outline+walls`, 237 elements (outline 1, marker 14, road 371, zone 17, waterway 2, water 1, building 505, retaining-wall 29, wall 92, cliff 1).

Evidence: documented 0, mapped 237, inferred 0, derived 0; heights documented 55, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/690719415 historic=yes 116 m from ledger point
- pruned to the outline plus 150 m: 1033 -> 622 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 337 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 188 mapped (trace size budget); minor lanes are not drawn
- origin moved 116 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.3724/4.64702) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3361159 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 237 elements); data/traces/palais-des-eveques-de-bourg-saint-andeol-q3361159.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
