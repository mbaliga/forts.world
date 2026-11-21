# Fort Mahon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-mahon-q2612774` |
| Coordinates | 50.80528, 1.60056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.80528/1.60056)) |
| Wikidata | [Q2612774](https://www.wikidata.org/wiki/Q2612774) (CC0) |
| Wikidata class | fort |
| Types | fort\|sea fort |
| Administrative area | Ambleteuse |
| Designations | classified historical monument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 91 elements (outline 1, marker 3, road 20, building 37, coastline 3, waterway 1, wall 22, zone 2, water 2).

Evidence: documented 0, mapped 91, inferred 0, derived 2; heights documented 0, inferred 0, unknown 59.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/245073511 historic=castle Q2612774 13 m from ledger point
- island ring (1547 m2) cut out of sea-0
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":320,"medianInside":3,"medianOutside":7.1}
- sea-1: DEM check ok {"cells":374,"medianInside":3,"medianOutside":3.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.80528/1.60056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|sea fort; sitelinks=6; wikidata:Q2612774 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 91 elements); data/traces/fort-mahon-q2612774.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
