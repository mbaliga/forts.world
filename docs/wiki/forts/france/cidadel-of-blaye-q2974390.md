# Cidadel of Blaye

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cidadel-of-blaye-q2974390` |
| Coordinates | 45.12924, -0.66647 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.12924/-0.66647)) |
| Wikidata | [Q2974390](https://www.wikidata.org/wiki/Q2974390) (CC0) |
| Wikidata class | fort |
| Types | citadel\|hill |
| Administrative area | Blaye |
| Inception | 1680 |
| Designations | classified historical monument |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 3, road 205, wall 19, building 722, waterway 6, retaining-wall 14, zone 13, coastline 1, water 2).

Evidence: documented 0, mapped 329, inferred 0, derived 2; heights documented 0, inferred 0, unknown 153.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/108157606 historic=castle Q2974390 31 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 722 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 205 mapped (trace size budget); minor lanes are not drawn
- origin moved 29 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":732,"medianInside":0,"medianOutside":11.9}
- sea-1: DEM check ok {"cells":8,"medianInside":3.5,"medianOutside":9.5}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.12924/-0.66647) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel\|hill; sitelinks=9; wikidata:Q2974390 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/cidadel-of-blaye-q2974390.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
