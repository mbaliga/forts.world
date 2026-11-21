# Burg Geiersberg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-geiersberg-q1011918` |
| Coordinates | 46.9563, 14.3991 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.9563/14.3991)) |
| Wikidata | [Q1011918](https://www.wikidata.org/wiki/Q1011918) (CC0) |
| Wikidata class | castle |
| Types | castle\|chapel |
| Administrative area | Friesach |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `website` | https://kultur-mittelkaernten.at/initiativen/burghofspiele-friesach/ |

## What the model contains

Tier **T1**, status `outline+walls`, 80 elements (outline 1, road 26, waterway 1, building 37, zone 1, water 1, wall 2, cliff 11).

Evidence: documented 0, mapped 80, inferred 0, derived 0; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/231509290 historic=castle 528 m from ledger point
- origin moved 528 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.9563/14.3991) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|chapel; sitelinks=6; wikidata:Q1011918 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 80 elements); data/traces/burg-geiersberg-q1011918.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
