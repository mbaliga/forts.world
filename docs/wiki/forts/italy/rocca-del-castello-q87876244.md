# Rocca del Castello

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-del-castello-q87876244` |
| Coordinates | 37.98862, 13.69788 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.98862/13.69788)) |
| Wikidata | [Q87876244](https://www.wikidata.org/wiki/Q87876244) (CC0) |
| Wikidata class | fortification |
| Types | rocca |
| Administrative area | Termini Imerese |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, road 167, building 358, retaining-wall 24, wall 21, coastline 1, zone 1).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 0, inferred 0, unknown 165.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/177515737 historic=yes 254 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 358 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 167 mapped (trace size budget); minor lanes are not drawn
- origin moved 255 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.98862/13.69788) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rocca; sitelinks=0; wikidata:Q87876244 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/rocca-del-castello-q87876244.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
