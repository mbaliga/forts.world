# Burg Obervoitsberg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-obervoitsberg-q1015450` |
| Coordinates | 47.0521, 15.1512 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.0521/15.1512)) |
| Wikidata | [Q1015450](https://www.wikidata.org/wiki/Q1015450) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Voitsberg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 159 elements (outline 1, building 109, road 41, waterway 1, wall 3, zone 2, water 1).

Evidence: documented 0, mapped 159, inferred 0, derived 0; heights documented 0, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/95989855 historic=castle Q1015450 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.0521/15.1512) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=4; wikidata:Q1015450 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 159 elements); data/traces/burg-obervoitsberg-q1015450.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
