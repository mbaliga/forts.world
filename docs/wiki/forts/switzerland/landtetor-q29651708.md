# Ländtetor

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `landtetor-q29651708` |
| Coordinates | 46.94904, 7.45804 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.94904/7.45804)) |
| Wikidata | [Q29651708](https://www.wikidata.org/wiki/Q29651708) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|gate\|built structure\|residential building |
| Administrative area | Bern |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 4, road 281, building 224, retaining-wall 53, water 2, wall 11, zone 6, waterway 18).

Evidence: documented 0, mapped 365, inferred 0, derived 0; heights documented 11, inferred 0, unknown 173.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/253531843 historic=ruins Q29651708 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 224 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 281 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.94904/7.45804) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|gate\|built structure\|residential building; sitelinks=1; wikidata:Q29651708 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/landtetor-q29651708.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
