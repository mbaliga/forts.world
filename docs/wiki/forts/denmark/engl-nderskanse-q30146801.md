# Englænderskanse

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `engl-nderskanse-q30146801` |
| Coordinates | 55.93557, 11.90822 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.93557/11.90822)) |
| Wikidata | [Q30146801](https://www.wikidata.org/wiki/Q30146801) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|sconce\|ancient monument |
| Administrative area | Frederikssund Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | sconce |

## What the model contains

Tier **T1**, status `outline-only`, 49 elements (outline 1, coastline 2, road 23, building 12, zone 7, water 4).

Evidence: documented 0, mapped 49, inferred 0, derived 3; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/564814224 historic=archaeological_site Q30146801 5 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":90,"medianInside":2,"medianOutside":1.1}
- sea-1: DEM check ok {"cells":12,"medianInside":0.1,"medianOutside":1.6}
- sea-2: DEM check ok {"cells":75,"medianInside":1,"medianOutside":3}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.93557/11.90822) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|sconce\|ancient monument; sitelinks=0; wikidata:Q30146801 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 49 elements); data/traces/engl-nderskanse-q30146801.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
