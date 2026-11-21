# Évora Medieval City Walls

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `evora-medieval-city-walls-q10333274` |
| Coordinates | 38.57242, -7.9151 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.57242/-7.9151)) |
| Wikidata | [Q10333274](https://www.wikidata.org/wiki/Q10333274) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort\|city walls |
| Administrative area | União das Freguesias de Évora (São Mamede, Sé, São Pedro e Santo Antão) |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 3, road 121, building 542, wall 54, zone 10).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 0, inferred 0, unknown 174.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/622692291 historic=castle 399 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 542 mapped (trace size budget); the rest of the town is not drawn
- origin moved 399 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.57242/-7.9151) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort\|city walls; sitelinks=3; wikidata:Q10333274 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/evora-medieval-city-walls-q10333274.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
