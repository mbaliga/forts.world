# Fort Benghisa

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-benghisa-q3748520` |
| Coordinates | 35.80833, 14.53222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.80833/14.53222)) |
| Wikidata | [Q3748520](https://www.wikidata.org/wiki/Q3748520) (CC0) |
| Wikidata class | fort |
| Types | unfinished building\|polygonal fort |
| Administrative area | Birżebbuġa |
| Inception | 1912 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 60 elements (outline 1, road 18, cliff 1, building 19, zone 2, wall 16, coastline 2, water 1).

Evidence: documented 0, mapped 60, inferred 0, derived 1; heights documented 0, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/46780543 historic=fort Q3748520 19 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":314,"medianInside":0,"medianOutside":36}
- 86 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.80833/14.53222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; unfinished building\|polygonal fort; sitelinks=4; wikidata:Q3748520 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 60 elements); data/traces/fort-benghisa-q3748520.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
