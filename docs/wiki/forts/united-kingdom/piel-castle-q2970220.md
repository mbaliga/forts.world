# Piel Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `piel-castle-q2970220` |
| Coordinates | 54.06255, -3.1736 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.06255/-3.1736)) |
| Wikidata | [Q2970220](https://www.wikidata.org/wiki/Q2970220) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Barrow-in-Furness |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/piel-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 32 elements (outline 1, coastline 1, building 2, waterway 1, zone 1, water 1, road 5, wall 20).

Evidence: documented 0, mapped 32, inferred 0, derived 0; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/88379287 historic=castle Q2970220 18 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 22 m from the ledger point to the outline centroid
- 174 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.06255/-3.1736) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=7; wikidata:Q2970220 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 32 elements); data/traces/piel-castle-q2970220.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
