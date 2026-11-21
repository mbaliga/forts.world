# Forte de São Sebastião da Horta

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-sao-sebastiao-da-horta-q10284060` |
| Coordinates | 38.52487, -28.62971 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.52487/-28.62971)) |
| Wikidata | [Q10284060](https://www.wikidata.org/wiki/Q10284060) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage\|fort |
| Administrative area | Angústias |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, road 49, building 252, retaining-wall 7, coastline 7, zone 2, water 4, wall 38, cliff 1).

Evidence: documented 0, mapped 361, inferred 0, derived 2; heights documented 3, inferred 0, unknown 294.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204812279 historic=fort Q10284060 6 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":249,"medianInside":0,"medianOutside":7.9}
- sea-1: DEM check ok {"cells":400,"medianInside":0.1,"medianOutside":3.2}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.52487/-28.62971) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage\|fort; sitelinks=2; wikidata:Q10284060 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/forte-de-sao-sebastiao-da-horta-q10284060.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
