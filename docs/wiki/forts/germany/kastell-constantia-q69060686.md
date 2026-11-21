# Kastell Constantia

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastell-constantia-q69060686` |
| Coordinates | 47.66336, 9.17598 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.66336/9.17598)) |
| Wikidata | [Q69060686](https://www.wikidata.org/wiki/Q69060686) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Administrative area | Constance |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 382 elements (outline 1, marker 34, road 157, building 425, zone 59, wall 15, waterway 3).

Evidence: documented 0, mapped 382, inferred 0, derived 0; heights documented 29, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10853890 historic=yes 140 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 425 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 157 mapped (trace size budget); minor lanes are not drawn
- origin moved 140 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.66336/9.17598) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=1; wikidata:Q69060686 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 382 elements); data/traces/kastell-constantia-q69060686.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
