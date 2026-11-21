# Tour de la Dodenne

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-la-dodenne-q22961083` |
| Coordinates | 50.35381, 3.52702 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.35381/3.52702)) |
| Wikidata | [Q22961083](https://www.wikidata.org/wiki/Q22961083) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Valenciennes |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 254 elements (outline 1, road 112, building 359, zone 17, wall 4).

Evidence: documented 0, mapped 254, inferred 0, derived 0; heights documented 1, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/110123862 historic=building Q22961090 613 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 359 mapped (trace size budget); the rest of the town is not drawn
- origin moved 612 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.35381/3.52702) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q22961083 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 254 elements); data/traces/tour-de-la-dodenne-q22961083.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
