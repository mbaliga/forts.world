# Solovetsky Monastery

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `solovetsky-monastery-q1140434` |
| Coordinates | 65.02472, 35.71029 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/65.02472/35.71029)) |
| Wikidata | [Q1140434](https://www.wikidata.org/wiki/Q1140434) (CC0) |
| Wikidata class | castle |
| Types | castle\|eastern orthodox monastery\|architectural landmark |
| Administrative area | Primorsky District |
| Inception | 1401 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 36 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, marker 13, zone 11, road 93, waterway 5, building 111, water 5, coastline 4, cliff 1, wall 1).

Evidence: documented 0, mapped 246, inferred 0, derived 3; heights documented 83, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/834330173 historic=citywalls 3 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1155,"medianInside":14.8,"medianOutside":7.8}
- sea-1: DEM check ok {"cells":8,"medianInside":7.9,"medianOutside":14.9}
- sea-2: DEM check failed {"cells":127,"medianInside":15.9,"medianOutside":14.6}
- 19 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/65.02472/35.71029) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|eastern orthodox monastery\|architectural landmark; sitelinks=36; wikidata:Q1140434 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/solovetsky-monastery-q1140434.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
