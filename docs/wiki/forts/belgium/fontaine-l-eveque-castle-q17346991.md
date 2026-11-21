# Fontaine-l'Évêque Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fontaine-l-eveque-castle-q17346991` |
| Coordinates | 50.41229, 4.32431 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.41229/4.32431)) |
| Wikidata | [Q17346991](https://www.wikidata.org/wiki/Q17346991) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|city hall |
| Administrative area | Fontaine-l'Évêque |
| Inception | C13;1 |
| Designations | protected heritage property in Wallonia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 162 elements (outline 1, road 37, building 392, wall 2, water 1, zone 1).

Evidence: documented 0, mapped 162, inferred 0, derived 0; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/366295242 historic=castle Q17346991 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 392 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.41229/4.32431) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|city hall; sitelinks=4; wikidata:Q17346991 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 162 elements); data/traces/fontaine-l-eveque-castle-q17346991.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
