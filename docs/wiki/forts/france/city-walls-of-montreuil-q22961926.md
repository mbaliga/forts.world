# city walls of Montreuil

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-montreuil-q22961926` |
| Coordinates | 50.46361, 1.76333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.46361/1.76333)) |
| Wikidata | [Q22961926](https://www.wikidata.org/wiki/Q22961926) (CC0) |
| Wikidata class | fortification |
| Types | enceinte |
| Administrative area | Montreuil-sur-Mer |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 11, road 164, wall 31, zone 5, building 255, waterway 6, retaining-wall 8, water 1).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 4, inferred 0, unknown 155.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/510565282 historic=castle Q2974391 470 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 255 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 164 mapped (trace size budget); minor lanes are not drawn
- origin moved 470 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.46361/1.76333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; enceinte; sitelinks=2; wikidata:Q22961926 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/city-walls-of-montreuil-q22961926.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
