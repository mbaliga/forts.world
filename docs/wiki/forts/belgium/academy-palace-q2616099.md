# Academy Palace

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `academy-palace-q2616099` |
| Coordinates | 50.84215, 4.36556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.84215/4.36556)) |
| Wikidata | [Q2616099](https://www.wikidata.org/wiki/Q2616099) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Brussels |
| Inception | 1828 |
| Designations | protected monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | http://www.irismonument.be/fr.Bruxelles_Pentagone.Rue_Ducale.1.html |

## What the model contains

Tier **T1**, status `outline+walls`, 254 elements (outline 1, marker 3, zone 28, road 327, building 63, wall 6, retaining-wall 1, water 2).

Evidence: documented 0, mapped 254, inferred 0, derived 0; heights documented 8, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225779391 historic=castle Q2616099 4 m from ledger point
- roads capped: kept the 150 longest of 327 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.84215/4.36556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=7; wikidata:Q2616099 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 254 elements); data/traces/academy-palace-q2616099.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
