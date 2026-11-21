# Castle in Wodzisław Śląski

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-in-wodzis-aw-slaski-q9386762` |
| Coordinates | 50.00232, 18.46505 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.00232/18.46505)) |
| Wikidata | [Q9386762](https://www.wikidata.org/wiki/Q9386762) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace |
| Administrative area | Wodzisław Śląski |
| Inception | 1745 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `description` | Zamek w Wodzisławiu Śląskim wzniesiony w XIII w. Nowy Zamek - Pałac Dietrichsteinów powstał w 1745 r. W latach 2018-2022 przeszedł gruntowną rewitalizację. |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 6, road 257, water 1, building 256, zone 50, waterway 2, retaining-wall 2, wall 5).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 43, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/169635121 historic=castle Q9386762 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 256 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 257 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.00232/18.46505) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace; sitelinks=3; wikidata:Q9386762 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/castle-in-wodzis-aw-slaski-q9386762.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
