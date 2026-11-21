# Bastille

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastille-q545992` |
| Coordinates | 45.19877, 5.72514 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.19877/5.72514)) |
| Wikidata | [Q545992](https://www.wikidata.org/wiki/Q545992) (CC0) |
| Wikidata class | fort |
| Types | fortification\|fort\|bastille |
| Administrative area | Grenoble |
| Designations | monument historique inscrit |
| Wikipedia language editions | 8 |
| OSM `historic` | ruins |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, road 146, building 80, cliff 98, wall 13, retaining-wall 13, zone 1).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 12, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/74951549 historic=ruins 359 m from ledger point
- origin moved 359 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.19877/5.72514) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|fort\|bastille; sitelinks=8; wikidata:Q545992 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/bastille-q545992.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
