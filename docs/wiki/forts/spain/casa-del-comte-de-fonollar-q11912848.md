# Casa del Comte de Fonollar

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-del-comte-de-fonollar-q11912848` |
| Coordinates | 41.38354, 2.17223 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.38354/2.17223)) |
| Wikidata | [Q11912848](https://www.wikidata.org/wiki/Q11912848) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Gothic Quarter |
| Designations | Cultural Asset of Local Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 22, road 158, zone 2, building 229, waterway 4, wall 6).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 105, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11259738 historic=castle Q11912848 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 229 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 158 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.38354/2.17223) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q11912848 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/casa-del-comte-de-fonollar-q11912848.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
