# Castra Lentia

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castra-lentia-q940178` |
| Coordinates | 48.3031, 14.2906 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.3031/14.2906)) |
| Wikidata | [Q940178](https://www.wikidata.org/wiki/Q940178) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Administrative area | Linz |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `description` | Linzer Schloss, Schlossmuseum, Schlossberg 1 in Linz |

## What the model contains

Tier **T1**, status `outline+walls`, 396 elements (outline 1, marker 1, water 2, road 227, zone 13, building 138, wall 11, retaining-wall 3).

Evidence: documented 0, mapped 396, inferred 0, derived 0; heights documented 68, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/14039464 historic=castle Q686508 660 m from ledger point
- origin moved 659 m from the ledger point to the outline centroid
- 54 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.3031/14.2906) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=2; wikidata:Q940178 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 396 elements); data/traces/castra-lentia-q940178.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
