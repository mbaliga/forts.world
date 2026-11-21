# Hotel Montaigu

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hotel-montaigu-q22916658` |
| Coordinates | 43.94685, 4.81181 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.94685/4.81181)) |
| Wikidata | [Q22916658](https://www.wikidata.org/wiki/Q22916658) (CC0) |
| Wikidata class | castle |
| Types | castle\|private mansion |
| Administrative area | Avignon |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, marker 2, road 154, building 764, waterway 3, retaining-wall 1, wall 1).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/83774257 historic=castle Q22916658 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 764 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 154 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.94685/4.81181) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|private mansion; sitelinks=2; wikidata:Q22916658 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 278 elements); data/traces/hotel-montaigu-q22916658.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
