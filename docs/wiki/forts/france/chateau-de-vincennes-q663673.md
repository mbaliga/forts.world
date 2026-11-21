# Château de Vincennes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-vincennes-q663673` |
| Coordinates | 48.84278, 2.43583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.84278/2.43583)) |
| Wikidata | [Q663673](https://www.wikidata.org/wiki/Q663673) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Vincennes |
| Inception | 1340 |
| Designations | classified historical monument\|listed in the general inventory of cultural heritage |
| Wikipedia language editions | 41 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `description` | Plus haut donjon d'Europe |
| OSM `website` | http://www.chateau-vincennes.fr |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 11, road 684, zone 136, building 519, wall 118, water 3, retaining-wall 5, waterway 11).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 32, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23032971 historic=castle Q663673 30 m from ledger point
- pruned to the outline plus 150 m: 1488 -> 981 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 323 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 493 mapped (trace size budget); minor lanes are not drawn
- origin moved 37 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.84278/2.43583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=41; wikidata:Q663673 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/chateau-de-vincennes-q663673.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
