# Castell i col·legiata de Sant Pere d'Àger

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-i-col-legiata-de-sant-pere-d-ager-q8460083` |
| Coordinates | 41.99981, 0.76274 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.99981/0.76274)) |
| Wikidata | [Q8460083](https://www.wikidata.org/wiki/Q8460083) (CC0) |
| Wikidata class | castle |
| Types | church building\|castle\|historic building |
| Administrative area | Àger |
| Inception | 1000 |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 254 elements (outline 1, marker 2, road 127, building 269, waterway 2, wall 2).

Evidence: documented 0, mapped 254, inferred 0, derived 0; heights documented 120, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/170250464 historic=castle 42 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 269 mapped (trace size budget); the rest of the town is not drawn
- origin moved 42 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.99981/0.76274) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; church building\|castle\|historic building; sitelinks=3; wikidata:Q8460083 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 254 elements); data/traces/castell-i-col-legiata-de-sant-pere-d-ager-q8460083.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
