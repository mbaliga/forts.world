# Castillo de Santa Bárbara

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-santa-barbara-q43133006` |
| Coordinates | 38.34904, -0.478 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.34904/-0.478)) |
| Wikidata | [Q43133006](https://www.wikidata.org/wiki/Q43133006) (CC0) |
| Wikidata class | castle |
| Types | castle\|abandoned village\|monument\|Castillo |
| Administrative area | Alicante |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 359 elements (outline 1, marker 1, coastline 1, road 245, building 210, wall 66, retaining-wall 15, zone 3, water 1).

Evidence: documented 0, mapped 359, inferred 0, derived 1; heights documented 113, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/20490181 historic=castle Q429562 31 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 210 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 245 mapped (trace size budget); minor lanes are not drawn
- origin moved 30 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":21,"medianInside":0,"medianOutside":59.2}
- 21 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.34904/-0.478) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|abandoned village\|monument\|Castillo; sitelinks=0; wikidata:Q43133006 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 359 elements); data/traces/castillo-de-santa-barbara-q43133006.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
