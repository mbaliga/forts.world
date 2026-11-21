# Forte Cardeto

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-cardeto-q111708543` |
| Coordinates | 43.62046, 13.5214 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.62046/13.5214)) |
| Wikidata | [Q111708543](https://www.wikidata.org/wiki/Q111708543) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Ancona |
| Inception | 1799 |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 76 elements (outline 1, marker 1, road 48, zone 3, cliff 2, wall 2, building 9, waterway 1, coastline 6, water 3).

Evidence: documented 0, mapped 76, inferred 0, derived 3; heights documented 3, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/129591268 historic=yes Q56258725 169 m from ledger point
- origin moved 165 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":8,"medianInside":0.3,"medianOutside":56.6}
- sea-1: DEM check ok {"cells":5,"medianInside":4.4,"medianOutside":56.5}
- sea-2: DEM check ok {"cells":10,"medianInside":-0.3,"medianOutside":56.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.62046/13.5214) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q111708543 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 76 elements); data/traces/forte-cardeto-q111708543.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
