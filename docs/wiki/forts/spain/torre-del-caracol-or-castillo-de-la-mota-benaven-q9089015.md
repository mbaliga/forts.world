# Torre del Caracol or Castillo de la Mota, Benavente

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-caracol-or-castillo-de-la-mota-benaven-q9089015` |
| Coordinates | 41.99814, -5.68137 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.99814/-5.68137)) |
| Wikidata | [Q9089015](https://www.wikidata.org/wiki/Q9089015) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|building\|monument |
| Administrative area | Benavente |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, road 219, wall 6, building 271, waterway 6, zone 26, retaining-wall 15, water 3).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 5, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26480178 historic=castle Q9089015 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 271 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 219 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.99814/-5.68137) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|building\|monument; sitelinks=3; wikidata:Q9089015 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/torre-del-caracol-or-castillo-de-la-mota-benaven-q9089015.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
