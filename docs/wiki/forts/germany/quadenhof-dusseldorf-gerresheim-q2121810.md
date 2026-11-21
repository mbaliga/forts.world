# Quadenhof (Düsseldorf-Gerresheim)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `quadenhof-dusseldorf-gerresheim-q2121810` |
| Coordinates | 51.23685, 6.86392 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.23685/6.86392)) |
| Wikidata | [Q2121810](https://www.wikidata.org/wiki/Q2121810) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|building |
| Administrative area | Düsseldorf |
| Inception | 1436 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 2, road 152, waterway 3, zone 11, building 273, wall 8).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 5, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/158009421 historic=castle Q2121810 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 273 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 152 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.23685/6.86392) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|building; sitelinks=1; wikidata:Q2121810 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 295 elements); data/traces/quadenhof-dusseldorf-gerresheim-q2121810.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
