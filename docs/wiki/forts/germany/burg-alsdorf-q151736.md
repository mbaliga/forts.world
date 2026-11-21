# Burg Alsdorf

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-alsdorf-q151736` |
| Coordinates | 50.8789, 6.16167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8789/6.16167)) |
| Wikidata | [Q151736](https://www.wikidata.org/wiki/Q151736) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Alsdorf |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 8 |
| OSM `description` | Ost- und Südflügel |

## What the model contains

Tier **T1**, status `outline+walls`, 193 elements (outline 1, marker 4, road 64, building 494, wall 3, zone 1).

Evidence: documented 0, mapped 193, inferred 0, derived 0; heights documented 1, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23580367 historic=castle Q151736 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 494 mapped (trace size budget); the rest of the town is not drawn
- origin moved 13 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8789/6.16167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q151736 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 193 elements); data/traces/burg-alsdorf-q151736.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
