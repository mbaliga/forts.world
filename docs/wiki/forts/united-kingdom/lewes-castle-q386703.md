# Lewes Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lewes-castle-q386703` |
| Coordinates | 50.8728, 0.00725 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8728/0.00725)) |
| Wikidata | [Q386703](https://www.wikidata.org/wiki/Q386703) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Lewes |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 228 elements (outline 1, marker 6, road 91, zone 5, building 319, wall 4, retaining-wall 1).

Evidence: documented 0, mapped 228, inferred 0, derived 0; heights documented 21, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/256167880 historic=castle 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 319 mapped (trace size budget); the rest of the town is not drawn
- origin moved 19 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8728/0.00725) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=13; wikidata:Q386703 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 228 elements); data/traces/lewes-castle-q386703.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
