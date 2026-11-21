# Ruine Hinterhaus

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ruine-hinterhaus-q1704301` |
| Coordinates | 48.3586, 15.407 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.3586/15.407)) |
| Wikidata | [Q1704301](https://www.wikidata.org/wiki/Q1704301) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle ruin |
| Administrative area | Spitz |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |
| OSM `website` | https://www.ruinehinterhaus.at/ |

## What the model contains

Tier **T1**, status `outline+walls`, 166 elements (outline 1, road 64, building 80, waterway 4, wall 7, retaining-wall 1, cliff 1, zone 8).

Evidence: documented 0, mapped 166, inferred 0, derived 0; heights documented 2, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/89229909 historic=castle Q1704301 8 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.3586/15.407) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle ruin; sitelinks=2; wikidata:Q1704301 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 166 elements); data/traces/ruine-hinterhaus-q1704301.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
