# Fort of the Concepción

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-the-concepcion-q32453102` |
| Coordinates | 35.28326, -2.96533 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.28326/-2.96533)) |
| Wikidata | [Q32453102](https://www.wikidata.org/wiki/Q32453102) (CC0) |
| Wikidata class | fort |
| Types | monument\|fort |
| Administrative area | Melilla |
| Inception | 1893 |
| Designations | bien de interés cultural\|Monument (Spain) |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 50 elements (outline 1, road 20, waterway 5, building 10, wall 7, zone 6).

Evidence: documented 0, mapped 50, inferred 0, derived 0; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/220515083 historic=castle Q32453102 13 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.28326/-2.96533) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; monument\|fort; sitelinks=3; wikidata:Q32453102 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 50 elements); data/traces/fort-of-the-concepcion-q32453102.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
