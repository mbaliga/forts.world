# Castle of Plaka Milou

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-plaka-milou-q38284842` |
| Coordinates | 36.74576, 24.42267 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.74576/24.42267)) |
| Wikidata | [Q38284842](https://www.wikidata.org/wiki/Q38284842) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Milos Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 341 elements (outline 1, marker 3, road 93, building 226, cliff 7, wall 89, retaining-wall 25, zone 3).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 194, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1068132669 historic=castle Q38284842 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 226 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.74576/24.42267) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q38284842 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/castle-of-plaka-milou-q38284842.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
