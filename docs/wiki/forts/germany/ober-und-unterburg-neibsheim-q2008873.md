# Ober- und Unterburg Neibsheim

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ober-und-unterburg-neibsheim-q2008873` |
| Coordinates | 49.0697, 8.68507 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.0697/8.68507)) |
| Wikidata | [Q2008873](https://www.wikidata.org/wiki/Q2008873) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Bretten |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `description` | Hier haben früher die Bauern die Milch abgeliefert und man konnte |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, marker 2, road 85, waterway 5, building 443, wall 13).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 2, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1422142531 historic=building 80 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 443 mapped (trace size budget); the rest of the town is not drawn
- origin moved 80 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.0697/8.68507) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q2008873 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 226 elements); data/traces/ober-und-unterburg-neibsheim-q2008873.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
