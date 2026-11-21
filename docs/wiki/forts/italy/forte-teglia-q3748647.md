# Forte Teglia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-teglia-q3748647` |
| Coordinates | 42.58889, 10.09944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.58889/10.09944)) |
| Wikidata | [Q3748647](https://www.wikidata.org/wiki/Q3748647) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Campo nell'Elba |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 61 elements (outline 1, coastline 2, road 25, wall 1, building 26, zone 5, water 1).

Evidence: documented 0, mapped 61, inferred 0, derived 1; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/441135155 historic=castle Q3748647 48 m from ledger point
- origin moved 45 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":289,"medianInside":0,"medianOutside":7.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.58889/10.09944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3748647 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 61 elements); data/traces/forte-teglia-q3748647.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
