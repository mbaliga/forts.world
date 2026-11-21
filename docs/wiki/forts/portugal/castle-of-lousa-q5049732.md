# Castle of Lousã

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-lousa-q5049732` |
| Coordinates | 40.10041, -8.23542 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.10041/-8.23542)) |
| Wikidata | [Q5049732](https://www.wikidata.org/wiki/Q5049732) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Lousã e Vilarinho |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://cm-lousa.pt/locais/castelo-de-arouce/ |

## What the model contains

Tier **T1**, status `outline+walls`, 110 elements (outline 1, road 77, waterway 6, water 1, wall 3, zone 3, building 12, cliff 6, retaining-wall 1).

Evidence: documented 0, mapped 110, inferred 0, derived 0; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1342531983 historic=castle Q5049732 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- 24 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.10041/-8.23542) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=4; wikidata:Q5049732 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 110 elements); data/traces/castle-of-lousa-q5049732.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
