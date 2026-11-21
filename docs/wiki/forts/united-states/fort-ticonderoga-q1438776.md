# Fort Ticonderoga

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-ticonderoga-q1438776` |
| Coordinates | 43.84167, -73.3875 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.84167/-73.3875)) |
| Wikidata | [Q1438776](https://www.wikidata.org/wiki/Q1438776) (CC0) |
| Wikidata class | fort |
| Types | star fort |
| Administrative area | Ticonderoga |
| Inception | 1754 |
| Designations | National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 21 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.fortticonderoga.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 25 elements (outline 1, road 13, wall 3, building 6, waterway 2).

Evidence: documented 0, mapped 25, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20124266 historic=castle Q1438776 10 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.84167/-73.3875) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; star fort; sitelinks=21; wikidata:Q1438776 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 25 elements); data/traces/fort-ticonderoga-q1438776.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
