# Alt-Ems

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alt-ems-q432903` |
| Coordinates | 47.3635, 9.69597 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.3635/9.69597)) |
| Wikidata | [Q432903](https://www.wikidata.org/wiki/Q432903) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle ruin |
| Administrative area | Hohenems |
| Inception | 1200 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 49 elements (outline 1, road 31, cliff 5, waterway 4, zone 1, wall 6, building 1).

Evidence: documented 0, mapped 49, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/188398859 historic=castle Q432903 11 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.3635/9.69597) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle ruin; sitelinks=4; wikidata:Q432903 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 49 elements); data/traces/alt-ems-q432903.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
