# Dun Vulan

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-vulan-q2184972` |
| Coordinates | 57.24062, -7.44919 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.24062/-7.44919)) |
| Wikidata | [Q2184972](https://www.wikidata.org/wiki/Q2184972) (CC0) |
| Wikidata class | fortification |
| Types | broch\|archaeological site |
| Administrative area | Outer Hebrides |
| Designations | scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |
| OSM `website` | https://canmore.org.uk/site/9825/south-uist-bornish-dun-vulan |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, road 1, coastline 1, water 4).

Evidence: documented 0, mapped 7, inferred 0, derived 3; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/363622783 historic=archaeological_site Q2184972 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":0.3,"medianOutside":1.4}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":1.4}
- sea-2: DEM check ok {"cells":150,"medianInside":0.8,"medianOutside":1.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.24062/-7.44919) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch\|archaeological site; sitelinks=5; wikidata:Q2184972 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 7 elements); data/traces/dun-vulan-q2184972.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
