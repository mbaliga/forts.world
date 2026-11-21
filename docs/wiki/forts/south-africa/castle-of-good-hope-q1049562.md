# Castle of Good Hope

> South Africa · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-good-hope-q1049562` |
| Coordinates | -33.92591, 18.42772 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-33.92591/18.42772)) |
| Wikidata | [Q1049562](https://www.wikidata.org/wiki/Q1049562) (CC0) |
| Wikidata class | fort |
| Types | star fort |
| Administrative area | City of Cape Town |
| Inception | 1666 |
| Designations | provincial heritage site\|national heritage site of South Africa |
| Wikipedia language editions | 28 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.castleofgoodhope.co.za/ |

## What the model contains

Tier **T1**, status `outline+walls`, 271 elements (outline 1, marker 1, road 303, building 64, water 2, wall 16, zone 24, retaining-wall 13).

Evidence: documented 0, mapped 271, inferred 0, derived 0; heights documented 83, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/57263 historic=castle Q1049562 10 m from ledger point
- roads capped: kept the 150 longest of 303 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-33.92591/18.42772) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; star fort; sitelinks=28; wikidata:Q1049562 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 271 elements); data/traces/castle-of-good-hope-q1049562.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-africa.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
