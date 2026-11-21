# Prince of Wales Fort

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prince-of-wales-fort-q1143671` |
| Coordinates | 58.79715, -94.21329 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.79715/-94.21329)) |
| Wikidata | [Q1143671](https://www.wikidata.org/wiki/Q1143671) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Manitoba |
| Inception | 1717 |
| Designations | national historic site of Canada |
| Wikipedia language editions | 9 |
| OSM `historic` | fort |
| OSM `ruins` | yes |
| OSM `website` | https://www.pc.gc.ca/eng/lhn-nhs/mb/prince/index.aspx |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, wall 2, road 8, building 1, coastline 1, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4518098 historic=fort Q1143671 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4,"medianInside":0,"medianOutside":2.4}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.79715/-94.21329) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=9; wikidata:Q1143671 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 14 elements); data/traces/prince-of-wales-fort-q1143671.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
