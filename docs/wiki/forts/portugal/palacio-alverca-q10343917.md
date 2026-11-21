# Palácio Alverca

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-alverca-q10343917` |
| Coordinates | 38.71593, -9.13986 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71593/-9.13986)) |
| Wikidata | [Q10343917](https://www.wikidata.org/wiki/Q10343917) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Santa Maria Maior |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `description` | Foi, em 1919, o luxuoso casino Magestic Club, sendo, desde meados do séc. XX a Casa do Alentejo. Mandado construír no séc. XVII pela famíla Paes do Amaral Viscondes de Alverca cujo brasão se pode ver na cornija. |

## What the model contains

Tier **T1**, status `outline+walls`, 339 elements (outline 1, marker 8, road 181, building 404, retaining-wall 18, wall 33, water 1, waterway 1, zone 7).

Evidence: documented 0, mapped 339, inferred 0, derived 0; heights documented 10, inferred 0, unknown 161.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96299647 historic=castle Q10343917 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 404 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 181 mapped (trace size budget); minor lanes are not drawn
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71593/-9.13986) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=3; wikidata:Q10343917 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 339 elements); data/traces/palacio-alverca-q10343917.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
