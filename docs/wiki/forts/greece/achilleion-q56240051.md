# Achilleion

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `achilleion-q56240051` |
| Coordinates | 39.56273, 19.90421 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.56273/19.90421)) |
| Wikidata | [Q56240051](https://www.wikidata.org/wiki/Q56240051) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|museum\|mansion |
| Administrative area | Municipality of Central Corfu and Diapontia Islands |
| Inception | 1890 |
| Designations | protected building in Greece |
| Wikipedia language editions | 21 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Palace and museum. Built by Empress Elisabeth of Austria ("Sisi") |
| OSM `barrier` | wall |
| OSM `website` | http://www.achillion-corfu.gr |

## What the model contains

Tier **T1**, status `outline+walls`, 142 elements (outline 1, marker 2, road 76, building 9, retaining-wall 4, wall 44, zone 4, waterway 1).

Evidence: documented 0, mapped 142, inferred 0, derived 0; heights documented 1, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/228177433 historic=castle Q56240051 10 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- 80 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.56273/19.90421) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|museum\|mansion; sitelinks=21; wikidata:Q56240051 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 142 elements); data/traces/achilleion-q56240051.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
