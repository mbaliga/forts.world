# Vestiges de la première enceinte de Bruxelles (mur)

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vestiges-de-la-premiere-enceinte-de-bruxelles-mu-q42418061` |
| Coordinates | 50.84941, 4.3463 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.84941/4.3463)) |
| Wikidata | [Q42418061](https://www.wikidata.org/wiki/Q42418061) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Brussels |
| Designations | protected monument |
| Wikipedia language editions | 0 |
| OSM `historic` | building |
| OSM `heritage` | https://monument.heritage.brussels/fr/Bruxelles_Pentagone/Rue_des_Chartreux/5/32248 |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, marker 3, road 356, building 492, water 5, wall 6, zone 1, waterway 2).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 5, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/244955726 historic=building 78 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 492 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 356 mapped (trace size budget); minor lanes are not drawn
- origin moved 78 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.84941/4.3463) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q42418061 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/vestiges-de-la-premiere-enceinte-de-bruxelles-mu-q42418061.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
