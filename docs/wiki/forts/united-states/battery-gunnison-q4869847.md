# Battery Gunnison

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `battery-gunnison-q4869847` |
| Coordinates | 40.46, -73.9955 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.46/-73.9955)) |
| Wikidata | [Q4869847](https://www.wikidata.org/wiki/Q4869847) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | New Jersey |
| Inception | 1904 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 75 elements (outline 1, road 47, coastline 1, building 14, zone 10, wall 2).

Evidence: documented 0, mapped 75, inferred 0, derived 0; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/415179239 historic=fort 31 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 33 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.46/-73.9955) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q4869847 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 75 elements); data/traces/battery-gunnison-q4869847.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
