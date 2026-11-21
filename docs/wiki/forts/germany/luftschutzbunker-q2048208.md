# Luftschutzbunker

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `luftschutzbunker-q2048208` |
| Coordinates | 49.45107, 11.06865 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.45107/11.06865)) |
| Wikidata | [Q2048208](https://www.wikidata.org/wiki/Q2048208) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter\|beer cellar |
| Administrative area | Nuremberg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 393 elements (outline 1, marker 7, waterway 1, road 181, building 151, zone 8, water 2, wall 41, retaining-wall 1).

Evidence: documented 0, mapped 393, inferred 0, derived 0; heights documented 118, inferred 0, unknown 75.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32474780 historic=citywalls 42 m from ledger point
- origin moved 42 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.45107/11.06865) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter\|beer cellar; sitelinks=1; wikidata:Q2048208 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 393 elements); data/traces/luftschutzbunker-q2048208.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
