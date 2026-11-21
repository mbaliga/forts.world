# Air-raid Shelter in Petrer

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `air-raid-shelter-in-petrer-q64615189` |
| Coordinates | 38.4844, -0.77477 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.4844/-0.77477)) |
| Wikidata | [Q64615189](https://www.wikidata.org/wiki/Q64615189) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | Petrer |
| Designations | Property of Local Relevance |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, road 220, zone 4, building 451, wall 4, waterway 1).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/165602689 historic=castle Q6746716 614 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 451 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 220 mapped (trace size budget); minor lanes are not drawn
- origin moved 614 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.4844/-0.77477) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=0; wikidata:Q64615189 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/air-raid-shelter-in-petrer-q64615189.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
