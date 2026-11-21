# Fort Orange

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-orange-q1438646` |
| Coordinates | -7.81056, -34.83944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-7.81056/-34.83944)) |
| Wikidata | [Q1438646](https://www.wikidata.org/wiki/Q1438646) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Ilha de Itamaracá |
| Designations | heritage asset listed by IPHAN\|Heritage of Portuguese Influence |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 84 elements (outline 1, marker 6, coastline 1, road 14, building 53, water 9).

Evidence: documented 0, mapped 84, inferred 0, derived 1; heights documented 2, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8300930 historic=fort Q1438646 40 m from ledger point
- origin moved 44 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":211,"medianInside":1.3,"medianOutside":5.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-7.81056/-34.83944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=6; wikidata:Q1438646 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 84 elements); data/traces/fort-orange-q1438646.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
