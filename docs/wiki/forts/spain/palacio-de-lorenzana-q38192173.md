# Palacio de Lorenzana

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-de-lorenzana-q38192173` |
| Coordinates | 39.46107, -5.8843 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.46107/-5.8843)) |
| Wikidata | [Q38192173](https://www.wikidata.org/wiki/Q38192173) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Trujillo |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://raex.es/index.php/la-sede |

## What the model contains

Tier **T1**, status `outline+walls`, 347 elements (outline 1, marker 7, road 129, wall 61, zone 14, water 2, building 258, retaining-wall 13).

Evidence: documented 0, mapped 347, inferred 0, derived 0; heights documented 13, inferred 0, unknown 181.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3464038 historic=castle Q38192173 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 258 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.46107/-5.8843) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=1; wikidata:Q38192173 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 347 elements); data/traces/palacio-de-lorenzana-q38192173.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
