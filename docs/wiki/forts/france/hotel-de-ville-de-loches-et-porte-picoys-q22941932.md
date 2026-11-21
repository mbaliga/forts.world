# Hôtel de Ville de Loches et Porte Picoys

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hotel-de-ville-de-loches-et-porte-picoys-q22941932` |
| Coordinates | 47.1282, 0.9975 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.1282/0.9975)) |
| Wikidata | [Q22941932](https://www.wikidata.org/wiki/Q22941932) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Loches |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://citeroyaleloches.fr |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 2, road 129, water 6, waterway 12, building 598, wall 7, zone 4).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 2, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/51827984 historic=castle Q1061061 129 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 598 mapped (trace size budget); the rest of the town is not drawn
- origin moved 129 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.1282/0.9975) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q22941932 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/hotel-de-ville-de-loches-et-porte-picoys-q22941932.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
