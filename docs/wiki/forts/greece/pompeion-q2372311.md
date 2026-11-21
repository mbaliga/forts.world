# Pompeion

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pompeion-q2372311` |
| Coordinates | 37.9782, 23.71893 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.9782/23.71893)) |
| Wikidata | [Q2372311](https://www.wikidata.org/wiki/Q2372311) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|archaeological site\|temple |
| Administrative area | Athens |
| Inception | -0400 |
| Wikipedia language editions | 10 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 5, road 170, waterway 3, building 207, zone 5, wall 28, retaining-wall 1).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 8, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/664834192 historic=archaeological_site Q2372311 18 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 207 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 170 mapped (trace size budget); minor lanes are not drawn
- origin moved 16 m from the ledger point to the centre of the mapped site
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.9782/23.71893) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|archaeological site\|temple; sitelinks=10; wikidata:Q2372311 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/pompeion-q2372311.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
