# Saalburg Roman Fort

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `saalburg-roman-fort-q542329` |
| Coordinates | 50.2715, 8.56666 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.2715/8.56666)) |
| Wikidata | [Q542329](https://www.wikidata.org/wiki/Q542329) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|archaeological site\|ancient Roman structure |
| Administrative area | Bad Homburg vor der Höhe |
| Inception | 0090 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | castrum |
| OSM `description` | This is an early 20th century replica of the Limes fort that stood here in Roman times. |
| OSM `barrier` | wall |
| OSM `website` | https://www.saalburgmuseum.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 197 elements (outline 1, marker 6, road 121, building 24, zone 28, wall 16).

Evidence: documented 0, mapped 197, inferred 0, derived 0; heights documented 16, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/8655395 historic=castle Q542329 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 25 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.2715/8.56666) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|archaeological site\|ancient Roman structure; sitelinks=15; wikidata:Q542329 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 197 elements); data/traces/saalburg-roman-fort-q542329.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
