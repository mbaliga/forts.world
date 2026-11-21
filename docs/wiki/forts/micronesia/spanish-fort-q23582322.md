# Spanish Fort

> Micronesia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spanish-fort-q23582322` |
| Coordinates | 9.51444, 138.12667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/9.51444/138.12667)) |
| Wikidata | [Q23582322](https://www.wikidata.org/wiki/Q23582322) (CC0) |
| Wikidata class | fort |
| Types | fort\|archaeological site |
| Administrative area | Colonia |
| Inception | 1887 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 23 elements (road 2, coastline 5, building 8, water 4, zone 4).

Evidence: documented 0, mapped 23, inferred 0, derived 2; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":54,"medianInside":19.8,"medianOutside":3.8}
- sea-1: DEM check ok {"cells":195,"medianInside":2.1,"medianOutside":10.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/9.51444/138.12667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|archaeological site; sitelinks=2; wikidata:Q23582322 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 23 elements); data/traces/spanish-fort-q23582322.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/micronesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
