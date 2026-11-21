# Castle of La Roche-en-Ardenne

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-la-roche-en-ardenne-q2969578` |
| Coordinates | 50.18195, 5.57655 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.18195/5.57655)) |
| Wikidata | [Q2969578](https://www.wikidata.org/wiki/Q2969578) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|yes\|château |
| Administrative area | La Roche-en-Ardenne |
| Inception | 0844 |
| Designations | protected heritage property in Wallonia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `ruins` | yes |
| OSM `website` | https://www.chateaudelaroche.be |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 5, road 158, waterway 8, building 393, wall 36, zone 35, water 3, cliff 1, retaining-wall 6).

Evidence: documented 0, mapped 365, inferred 0, derived 0; heights documented 3, inferred 0, unknown 159.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17950927 historic=castle Q2969578 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 393 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 158 mapped (trace size budget); minor lanes are not drawn
- origin moved 14 m from the ledger point to the outline centroid
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.18195/5.57655) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|yes\|château; sitelinks=5; wikidata:Q2969578 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/castle-of-la-roche-en-ardenne-q2969578.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
