# Ramparts of the Baux-de-Provence

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ramparts-of-the-baux-de-provence-q22986188` |
| Coordinates | 43.74419, 4.79498 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.74419/4.79498)) |
| Wikidata | [Q22986188](https://www.wikidata.org/wiki/Q22986188) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Les Baux-de-Provence |
| Designations | classified historical monument |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 383 elements (outline 1, marker 8, road 271, building 176, cliff 20, zone 96, wall 88, retaining-wall 54, pit 1).

Evidence: documented 0, mapped 383, inferred 0, derived 0; heights documented 32, inferred 0, unknown 161.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/329862230 historic=castle Q2971472 130 m from ledger point
- pruned to the outline plus 150 m: 715 -> 653 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 161 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 249 mapped (trace size budget); minor lanes are not drawn
- origin moved 130 m from the ledger point to the centre of the mapped site
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.74419/4.79498) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=0; wikidata:Q22986188 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 383 elements); data/traces/ramparts-of-the-baux-de-provence-q22986188.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
