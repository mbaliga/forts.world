# Baeza town hall

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baeza-town-hall-q5754603` |
| Coordinates | 37.99352, -3.46975 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.99352/-3.46975)) |
| Wikidata | [Q5754603](https://www.wikidata.org/wiki/Q5754603) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|casa consistorial |
| Administrative area | Baeza |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 6, road 90, building 451, zone 6, retaining-wall 2, wall 77).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 52, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/109288899 historic=castle Q5754603 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 451 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.99352/-3.46975) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|casa consistorial; sitelinks=3; wikidata:Q5754603 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/baeza-town-hall-q5754603.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
