# Battery Seydlitz

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `battery-seydlitz-q94577281` |
| Coordinates | 47.65122, -3.49544 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.65122/-3.49544)) |
| Wikidata | [Q94577281](https://www.wikidata.org/wiki/Q94577281) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Inception | 1944 |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 61 elements (outline 1, marker 1, road 38, coastline 1, building 14, retaining-wall 4, zone 1).

Evidence: documented 0, mapped 61, inferred 0, derived 0; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23582336 historic=fort 295 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 299 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.65122/-3.49544) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=1; wikidata:Q94577281 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 61 elements); data/traces/battery-seydlitz-q94577281.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
