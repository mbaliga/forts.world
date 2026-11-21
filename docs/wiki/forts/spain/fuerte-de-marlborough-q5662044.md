# Fuerte de Marlborough

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fuerte-de-marlborough-q5662044` |
| Coordinates | 39.86298, 4.30147 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.86298/4.30147)) |
| Wikidata | [Q5662044](https://www.wikidata.org/wiki/Q5662044) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Es Castell |
| Inception | 1710 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | mondays for free, entrwnce adults 3€, audio guide 3€ |

## What the model contains

Tier **T1**, status `outline+walls`, 115 elements (outline 1, road 16, coastline 1, building 74, wall 18, cliff 2, zone 1, water 2).

Evidence: documented 0, mapped 115, inferred 0, derived 2; heights documented 72, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/115648479 historic=castle 3 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":108,"medianInside":7.4,"medianOutside":17.6}
- sea-1: DEM check failed {"cells":356,"medianInside":15.4,"medianOutside":12.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.86298/4.30147) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q5662044 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 115 elements); data/traces/fuerte-de-marlborough-q5662044.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
