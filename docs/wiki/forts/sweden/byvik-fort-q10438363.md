# Byvik Fort

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `byvik-fort-q10438363` |
| Coordinates | 59.39972, 18.42583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.39972/18.42583)) |
| Wikidata | [Q10438363](https://www.wikidata.org/wiki/Q10438363) (CC0) |
| Wikidata class | fort |
| Types | fortification\|coastal battery\|heritage site in Sweden |
| Administrative area | Vaxholm Municipality |
| Inception | 1903 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 46 elements (outline 1, coastline 2, building 11, road 26, zone 4, waterway 1, water 1).

Evidence: documented 0, mapped 46, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23991916 historic=fort Q10612991 558 m from ledger point
- origin moved 558 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":160,"medianInside":9.1,"medianOutside":23.1}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.39972/18.42583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|coastal battery\|heritage site in Sweden; sitelinks=2; wikidata:Q10438363 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 46 elements); data/traces/byvik-fort-q10438363.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
