# Ramparts of Briançon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ramparts-of-briancon-q22998403` |
| Coordinates | 44.90058, 6.64408 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.90058/6.64408)) |
| Wikidata | [Q22998403](https://www.wikidata.org/wiki/Q22998403) (CC0) |
| Wikidata class | fort |
| Types | fortification\|city walls |
| Administrative area | Briançon |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 379 elements (outline 1, marker 6, waterway 3, road 274, wall 45, zone 12, building 258, retaining-wall 35, cliff 7).

Evidence: documented 0, mapped 379, inferred 0, derived 0; heights documented 16, inferred 0, unknown 184.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/73577472 historic=fort 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 258 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 274 mapped (trace size budget); minor lanes are not drawn
- origin moved 19 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.90058/6.64408) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|city walls; sitelinks=1; wikidata:Q22998403 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 379 elements); data/traces/ramparts-of-briancon-q22998403.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
