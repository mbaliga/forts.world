# Palais Winkler von Mohrenfels, Friedrichstraße

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-winkler-von-mohrenfels-friedrichstra-e-q41410129` |
| Coordinates | 49.5961, 11.0087 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5961/11.0087)) |
| Wikidata | [Q41410129](https://www.wikidata.org/wiki/Q41410129) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|cultural heritage ensemble |
| Administrative area | Erlangen |
| Inception | 1726 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |
| OSM `description` | Barockes Adelspalais, erbaut 1726. Zweigeschossiger Quaderbau mit Portal zur Friedrich- sowie Toreinfahrt zur Fahrstraße. |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 19, road 189, building 272, wall 23, zone 20, water 1).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 17, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/208441729 historic=castle Q41410129 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 272 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 189 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5961/11.0087) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|cultural heritage ensemble; sitelinks=1; wikidata:Q41410129 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/palais-winkler-von-mohrenfels-friedrichstra-e-q41410129.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
