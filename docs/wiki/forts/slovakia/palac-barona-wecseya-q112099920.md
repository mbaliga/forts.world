# Palác baróna Wécseya

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palac-barona-wecseya-q112099920` |
| Coordinates | 48.99628, 21.24078 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.99628/21.24078)) |
| Wikidata | [Q112099920](https://www.wikidata.org/wiki/Q112099920) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|house |
| Administrative area | Prešov |
| Inception | 1500 |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 27, road 316, building 322, zone 5, wall 46, water 3, waterway 1).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 15, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/82411770 historic=castle Q112099920 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 322 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 316 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.99628/21.24078) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|house; sitelinks=0; wikidata:Q112099920 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/palac-barona-wecseya-q112099920.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
