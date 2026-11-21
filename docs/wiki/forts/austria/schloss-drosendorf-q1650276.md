# Schloss Drosendorf

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-drosendorf-q1650276` |
| Coordinates | 48.8669, 15.6203 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8669/15.6203)) |
| Wikidata | [Q1650276](https://www.wikidata.org/wiki/Q1650276) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Drosendorf-Zissersdorf |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately;defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://www.schloss-drosendorf.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 4, road 92, waterway 5, building 132, wall 28, zone 17, cliff 1, retaining-wall 1).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 27, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1973589 historic=castle Q1650276 9 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 17 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8669/15.6203) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q1650276 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/schloss-drosendorf-q1650276.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
