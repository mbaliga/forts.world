# King's Bastion

> Gibraltar · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `king-s-bastion-q12061009` |
| Coordinates | 36.13971, -5.35537 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.13971/-5.35537)) |
| Wikidata | [Q12061009](https://www.wikidata.org/wiki/Q12061009) (CC0) |
| Wikidata class | fort |
| Types | fort\|bastion |
| Administrative area | Gibraltar |
| Inception | 1773 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 6, road 132, building 99, coastline 1, water 3, wall 6, retaining-wall 1).

Evidence: documented 0, mapped 249, inferred 0, derived 2; heights documented 5, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/952588383 historic=fort Q12061009 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":395,"medianInside":5.9,"medianOutside":16.8}
- sea-1: DEM check ok {"cells":22,"medianInside":0.1,"medianOutside":6.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.13971/-5.35537) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|bastion; sitelinks=4; wikidata:Q12061009 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/king-s-bastion-q12061009.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/gibraltar.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
