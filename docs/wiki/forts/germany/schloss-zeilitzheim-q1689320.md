# Schloss Zeilitzheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-zeilitzheim-q1689320` |
| Coordinates | 49.89787, 10.26841 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.89787/10.26841)) |
| Wikidata | [Q1689320](https://www.wikidata.org/wiki/Q1689320) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château\|archaeological site |
| Administrative area | Kolitzheim |
| Inception | 1679 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | yes |
| OSM `description` | Barockschloss erbaut 1679-83 |

## What the model contains

Tier **T1**, status `outline-only`, 179 elements (outline 1, road 51, waterway 2, zone 5, building 379).

Evidence: documented 0, mapped 179, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2607486 historic=castle Q1689320 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 379 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.89787/10.26841) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château\|archaeological site; sitelinks=2; wikidata:Q1689320 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 179 elements); data/traces/schloss-zeilitzheim-q1689320.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
