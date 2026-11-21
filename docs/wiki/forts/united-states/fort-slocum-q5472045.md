# Fort Slocum

> United States · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-slocum-q5472045` |
| Coordinates | 40.884, -73.77 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.884/-73.77)) |
| Wikidata | [Q5472045](https://www.wikidata.org/wiki/Q5472045) (CC0) |
| Wikidata class | fort |
| Types | fort\|destroyed building or structure |
| Inception | 1862 |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 15 elements (coastline 1, road 10, zone 2, water 2).

Evidence: documented 0, mapped 15, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":12,"medianInside":2,"medianOutside":5.4}
- sea-1: DEM check ok {"cells":19,"medianInside":2.5,"medianOutside":5.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.884/-73.77) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|destroyed building or structure; sitelinks=3; wikidata:Q5472045 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 15 elements); data/traces/fort-slocum-q5472045.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
