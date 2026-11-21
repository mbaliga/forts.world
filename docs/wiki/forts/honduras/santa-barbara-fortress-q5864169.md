# Santa Bárbara fortress

> Honduras · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `santa-barbara-fortress-q5864169` |
| Coordinates | 15.92109, -85.95259 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.92109/-85.95259)) |
| Wikidata | [Q5864169](https://www.wikidata.org/wiki/Q5864169) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Trujillo |
| Inception | 1550 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 190 elements (outline 1, coastline 1, road 22, building 165, water 1).

Evidence: documented 0, mapped 190, inferred 0, derived 1; heights documented 0, inferred 0, unknown 165.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/203593347 historic=castle Q5864169 5 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":52,"medianInside":2.8,"medianOutside":20.6}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.92109/-85.95259) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=3; wikidata:Q5864169 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 190 elements); data/traces/santa-barbara-fortress-q5864169.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/honduras.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
