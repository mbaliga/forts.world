# Cowd Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cowd-castle-q5179622` |
| Coordinates | 54.2582, -5.6057 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.2582/-5.6057)) |
| Wikidata | [Q5179622](https://www.wikidata.org/wiki/Q5179622) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | castle |
| OSM `website` | https://www.communities-ni.gov.uk/heritage-sites/cowd-castle |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 1, coastline 2, road 102, building 187, wall 14, zone 10, water 4).

Evidence: documented 0, mapped 321, inferred 0, derived 4; heights documented 0, inferred 0, unknown 201.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1422839890 historic=archaeological_site 34 m from ledger point
- origin moved 33 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":4,"medianOutside":12.5}
- sea-1: DEM check ok {"cells":6,"medianInside":3.7,"medianOutside":12.6}
- sea-2: DEM check ok {"cells":1,"medianInside":3,"medianOutside":12.5}
- sea-3: DEM check ok {"cells":26,"medianInside":4,"medianOutside":13.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.2582/-5.6057) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q5179622 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/cowd-castle-q5179622.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
