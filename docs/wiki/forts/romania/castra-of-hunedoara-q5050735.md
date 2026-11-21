# Castra of Hunedoara

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-of-hunedoara-q5050735` |
| Coordinates | 45.74889, 22.88833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.74889/22.88833)) |
| Wikidata | [Q5050735](https://www.wikidata.org/wiki/Q5050735) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Designations | Historic Monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://www.castelulcorvinilor.ro/ |

## What the model contains

Tier **T1**, status `outline+walls`, 170 elements (outline 1, marker 3, road 44, waterway 2, building 110, wall 2, zone 5, retaining-wall 3).

Evidence: documented 0, mapped 170, inferred 0, derived 0; heights documented 6, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1327914056 historic=castle Q126576 26 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.74889/22.88833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=2; wikidata:Q5050735 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 170 elements); data/traces/castra-of-hunedoara-q5050735.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
