# Porta Garibaldi

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-garibaldi-q28000613` |
| Coordinates | 37.63403, 14.38743 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.63403/14.38743)) |
| Wikidata | [Q28000613](https://www.wikidata.org/wiki/Q28000613) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Leonforte |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | monument |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 2, road 141, waterway 1, building 423, wall 137, retaining-wall 45, zone 2, cliff 1).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 0, inferred 0, unknown 174.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1154596965 historic=monument 22 m from ledger point
- pruned to the outline plus 150 m: 753 -> 400 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 203 mapped (trace size budget); the rest of the town is not drawn
- origin moved 23 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.63403/14.38743) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q28000613 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/porta-garibaldi-q28000613.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
