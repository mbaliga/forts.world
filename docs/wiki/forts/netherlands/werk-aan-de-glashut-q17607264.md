# Werk aan de Glashut

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `werk-aan-de-glashut-q17607264` |
| Coordinates | 52.16809, 5.37224 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.16809/5.37224)) |
| Wikidata | [Q17607264](https://www.wikidata.org/wiki/Q17607264) (CC0) |
| Wikidata class | fort |
| Types | fort\|fortification |
| Administrative area | Amersfoort |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `website` | https://www.grebbelinie.nl/page/glashut |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, road 132, waterway 15, building 233, zone 49, water 13, wall 1).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1007661276 historic=fort Q17607264 50 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 233 mapped (trace size budget); the rest of the town is not drawn
- origin moved 56 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.16809/5.37224) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fortification; sitelinks=2; wikidata:Q17607264 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/werk-aan-de-glashut-q17607264.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
