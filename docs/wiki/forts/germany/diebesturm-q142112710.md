# Diebesturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `diebesturm-q142112710` |
| Coordinates | 49.50574, 8.2143 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.50574/8.2143)) |
| Wikidata | [Q142112710](https://www.wikidata.org/wiki/Q142112710) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Freinsheim |
| Designations | cultural heritage monument in Rhineland-Palatinate |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 274 elements (outline 1, marker 4, road 118, building 606, wall 27, zone 2, waterway 2).

Evidence: documented 0, mapped 274, inferred 0, derived 0; heights documented 21, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/319556834 historic=yes 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 606 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.50574/8.2143) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q142112710 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 274 elements); data/traces/diebesturm-q142112710.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
