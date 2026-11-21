# Penlee Battery

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `penlee-battery-q7163079` |
| Coordinates | 50.3203, -4.19306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.3203/-4.19306)) |
| Wikidata | [Q7163079](https://www.wikidata.org/wiki/Q7163079) (CC0) |
| Wikidata class | fortification |
| Types | nature reserve\|artillery battery |
| Administrative area | Cornwall |
| Inception | 1889 |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 38 elements (outline 1, marker 1, road 18, coastline 7, building 3, zone 2, water 6).

Evidence: documented 0, mapped 38, inferred 0, derived 6; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/988869943 historic=yes 42 m from ledger point
- island ring (1012 m2) cut out of sea-5
- origin moved 39 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":3.6,"medianOutside":55.2}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":55.2}
- sea-2: DEM check ok {"cells":3,"medianInside":0.4,"medianOutside":55.4}
- sea-3: DEM check ok {"cells":13,"medianInside":1.3,"medianOutside":56.4}
- sea-4: DEM check ok {"cells":7,"medianInside":-0.3,"medianOutside":55.9}
- sea-5: DEM check ok {"cells":90,"medianInside":-0.9,"medianOutside":61.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.3203/-4.19306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; nature reserve\|artillery battery; sitelinks=2; wikidata:Q7163079 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 38 elements); data/traces/penlee-battery-q7163079.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
