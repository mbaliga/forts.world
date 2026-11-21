# Drottningskär Citadel

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `drottningskar-citadel-q10477004` |
| Coordinates | 56.11017, 15.56434 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.11017/15.56434)) |
| Wikidata | [Q10477004](https://www.wikidata.org/wiki/Q10477004) (CC0) |
| Wikidata class | fort |
| Types | museum\|citadel\|architectural ensemble\|fort\|heritage site in Sweden |
| Administrative area | Karlskrona Municipality |
| Inception | 1680 |
| Designations | governmental listed building complex\|monument in Fornminnesregistret |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 21 elements (outline 1, coastline 6, road 8, wall 1, waterway 2, water 3).

Evidence: documented 0, mapped 21, inferred 0, derived 3; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14332468 historic=fort Q10477004 28 m from ledger point
- island ring (1097 m2) cut out of sea-0
- island ring (13374 m2) cut out of sea-0
- origin moved 28 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":364,"medianInside":2.5,"medianOutside":1.9}
- sea-1: DEM check failed {"cells":398,"medianInside":2.3,"medianOutside":1}
- sea-2: DEM check ok {"cells":348,"medianInside":2,"medianOutside":2.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.11017/15.56434) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|citadel\|architectural ensemble\|fort\|heritage site in Sweden; sitelinks=4; wikidata:Q10477004 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 21 elements); data/traces/drottningskar-citadel-q10477004.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
