# Katarina rock shelter

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `katarina-rock-shelter-q10544312` |
| Coordinates | 59.3175, 18.0742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.3175/18.0742)) |
| Wikidata | [Q10544312](https://www.wikidata.org/wiki/Q10544312) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter\|parking area |
| Administrative area | Södermalm |
| Inception | 1957 |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, road 320, coastline 6, building 55, retaining-wall 8, wall 23, cliff 1, water 3, waterway 5).

Evidence: documented 0, mapped 252, inferred 0, derived 1; heights documented 48, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103570725 historic=building Q615365 275 m from ledger point
- roads capped: kept the 150 longest of 320 mapped (trace size budget); minor lanes are not drawn
- origin moved 275 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":53,"medianInside":10,"medianOutside":24.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.3175/18.0742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter\|parking area; sitelinks=3; wikidata:Q10544312 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 252 elements); data/traces/katarina-rock-shelter-q10544312.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
