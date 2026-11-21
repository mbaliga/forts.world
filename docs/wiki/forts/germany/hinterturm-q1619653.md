# Hinterturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hinterturm-q1619653` |
| Coordinates | 50.6729, 9.56046 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6729/9.56046)) |
| Wikidata | [Q1619653](https://www.wikidata.org/wiki/Q1619653) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Schlitz |
| Inception | 1493 |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | tower |
| OSM `description` | Der Turm hat 36 m Höhe und 36 m Umfang - In der Advents- und Weihnachtszeit wird er als größte Weihnachtskerze der Welt verkleidet. |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, road 121, waterway 7, wall 24, water 5, building 423, zone 3, retaining-wall 11).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 3, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18504920 historic=castle Q1619653 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 423 mapped (trace size budget); the rest of the town is not drawn
- origin moved 23 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6729/9.56046) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1619653 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/hinterturm-q1619653.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
