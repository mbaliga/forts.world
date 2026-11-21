# Taxispalais (Innsbruck)

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `taxispalais-innsbruck-q20027213` |
| Coordinates | 47.26428, 11.39522 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.26428/11.39522)) |
| Wikidata | [Q20027213](https://www.wikidata.org/wiki/Q20027213) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|city palace |
| Administrative area | Innsbruck |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 7, road 250, building 189, zone 4, wall 5, water 3, waterway 1, retaining-wall 2).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 83, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48361692 historic=castle Q20027213 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 189 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 250 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.26428/11.39522) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|city palace; sitelinks=2; wikidata:Q20027213 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/taxispalais-innsbruck-q20027213.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
