# Pontefract Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pontefract-castle-q1949590` |
| Coordinates | 53.6955, -1.30394 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.6955/-1.30394)) |
| Wikidata | [Q1949590](https://www.wikidata.org/wiki/Q1949590) (CC0) |
| Wikidata class | castle |
| Types | castle\|motte-and-bailey castle\|museum |
| Administrative area | Wakefield |
| Inception | 1070 |
| Designations | scheduled monument |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |
| OSM `website` | https://www.wakefield.gov.uk/museums-and-castles/pontefract-castle |

## What the model contains

Tier **T1**, status `outline+walls`, 397 elements (outline 1, road 359, building 267, zone 57, wall 56, waterway 2, retaining-wall 11).

Evidence: documented 0, mapped 397, inferred 0, derived 0; heights documented 30, inferred 0, unknown 157.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/116946923 historic=castle Q1949590 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 267 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 359 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.6955/-1.30394) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|motte-and-bailey castle\|museum; sitelinks=13; wikidata:Q1949590 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 397 elements); data/traces/pontefract-castle-q1949590.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
