# casa-palacio de la calle del Sol

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-palacio-de-la-calle-del-sol-q5411827` |
| Coordinates | 39.96078, -4.82901 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.96078/-4.82901)) |
| Wikidata | [Q5411827](https://www.wikidata.org/wiki/Q5411827) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|house |
| Administrative area | Talavera de la Reina |
| Inception | 1650 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 268 elements (outline 1, road 105, building 310, wall 29, zone 13).

Evidence: documented 0, mapped 268, inferred 0, derived 0; heights documented 0, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/661201606 historic=castle Q5411827 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 310 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.96078/-4.82901) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|house; sitelinks=1; wikidata:Q5411827 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 268 elements); data/traces/casa-palacio-de-la-calle-del-sol-q5411827.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
