# Cerca de Coimbra, designadamente o Arco de Almedina

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cerca-de-coimbra-designadamente-o-arco-de-almedi-q66942209` |
| Coordinates | 40.20907, -8.42878 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.20907/-8.42878)) |
| Wikidata | [Q66942209](https://www.wikidata.org/wiki/Q66942209) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|cultural heritage |
| Administrative area | Coimbra (Sé Nova, Santa Cruz, Almedina e São Bartolomeu) |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 238 elements (outline 1, marker 13, road 243, waterway 1, building 921, wall 105, retaining-wall 30, zone 5, water 2).

Evidence: documented 0, mapped 238, inferred 0, derived 0; heights documented 28, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/255866033 historic=castle Q66941991 54 m from ledger point
- pruned to the outline plus 150 m: 1321 -> 830 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 594 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 138 mapped (trace size budget); minor lanes are not drawn
- origin moved 55 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.20907/-8.42878) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|cultural heritage; sitelinks=1; wikidata:Q66942209 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 238 elements); data/traces/cerca-de-coimbra-designadamente-o-arco-de-almedi-q66942209.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
