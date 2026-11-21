# Mexico–United States border wall

> Mexico · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mexico-united-states-border-wall-q2631595` |
| Coordinates | 32.5344, -117.1237 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.5344/-117.1237)) |
| Wikidata | [Q2631595](https://www.wikidata.org/wiki/Q2631595) (CC0) |
| Wikidata class | fortification |
| Types | border barrier |
| Inception | 1838 |
| Wikipedia language editions | 25 |

## What the model contains

Tier **T1**, status `location-only`, 134 elements (marker 1, road 92, coastline 3, zone 15, building 21, wall 1, water 1).

Evidence: documented 0, mapped 134, inferred 0, derived 1; heights documented 1, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":659,"medianInside":0.4,"medianOutside":15.5}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.5344/-117.1237) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; border barrier; sitelinks=25; wikidata:Q2631595 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 134 elements); data/traces/mexico-united-states-border-wall-q2631595.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/mexico.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
