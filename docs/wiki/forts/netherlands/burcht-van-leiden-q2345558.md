# Burcht van Leiden

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burcht-van-leiden-q2345558` |
| Coordinates | 52.15899, 4.49243 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.15899/4.49243)) |
| Wikidata | [Q2345558](https://www.wikidata.org/wiki/Q2345558) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|keep |
| Administrative area | Leiden |
| Inception | 1000 |
| Designations | Rijksmonument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `description` | De burcht Leiden |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 11, road 157, building 774, waterway 6, wall 6, water 3, zone 1).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 4, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/30714513 historic=castle Q2345558 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 774 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 157 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.15899/4.49243) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|keep; sitelinks=6; wikidata:Q2345558 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/burcht-van-leiden-q2345558.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
