# Roter Turm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `roter-turm-q66971146` |
| Coordinates | 49.75044, 6.6339 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.75044/6.6339)) |
| Wikidata | [Q66971146](https://www.wikidata.org/wiki/Q66971146) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|wall\|tower |
| Administrative area | Trier |
| Inception | 1543 |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `heritage` | 4 |
| OSM `description` | Erhaltener Teil der geschleiften Stadtmauer. War ihr als Rundturm vorgestellt. |
| OSM `ruins` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 1, road 231, zone 13, building 290, wall 74, waterway 1, retaining-wall 1).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 95, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/40746183 historic=ruins Q66971146 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 290 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 231 mapped (trace size budget); minor lanes are not drawn
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.75044/6.6339) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|wall\|tower; sitelinks=2; wikidata:Q66971146 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/roter-turm-q66971146.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
