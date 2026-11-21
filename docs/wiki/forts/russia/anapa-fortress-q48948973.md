# Anapa Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `anapa-fortress-q48948973` |
| Coordinates | 44.89556, 37.31139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.89556/37.31139)) |
| Wikidata | [Q48948973](https://www.wikidata.org/wiki/Q48948973) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Anapa |
| Designations | cultural heritage site in Russia |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 137 elements (outline 1, marker 5, road 63, building 60, water 3, zone 3, coastline 2).

Evidence: documented 0, mapped 137, inferred 0, derived 2; heights documented 7, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/652417590 historic=ruins 109 m from ledger point
- origin moved 99 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":75,"medianInside":3,"medianOutside":14.2}
- sea-1: DEM check ok {"cells":8,"medianInside":5.4,"medianOutside":13.4}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.89556/37.31139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q48948973 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 137 elements); data/traces/anapa-fortress-q48948973.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
