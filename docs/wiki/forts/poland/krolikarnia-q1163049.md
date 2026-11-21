# Królikarnia

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `krolikarnia-q1163049` |
| Coordinates | 52.18903, 21.02837 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.18903/21.02837)) |
| Wikidata | [Q1163049](https://www.wikidata.org/wiki/Q1163049) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|architectural heritage monument\|museum building |
| Administrative area | Warsaw |
| Inception | 1786 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | http://www.krolikarnia.mnw.art.pl |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, marker 2, road 186, water 2, waterway 9, building 45, zone 6, wall 3, cliff 3, retaining-wall 4).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 45, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23498836 historic=castle Q1163049 2 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.18903/21.02837) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|architectural heritage monument\|museum building; sitelinks=12; wikidata:Q1163049 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 261 elements); data/traces/krolikarnia-q1163049.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
