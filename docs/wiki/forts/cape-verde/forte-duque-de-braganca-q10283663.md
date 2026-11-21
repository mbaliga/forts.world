# Forte Duque de Bragança

> Cape Verde · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-duque-de-braganca-q10283663` |
| Coordinates | 16.16667, -22.93333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/16.16667/-22.93333)) |
| Wikidata | [Q10283663](https://www.wikidata.org/wiki/Q10283663) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Sal Rei |
| Inception | 1818 |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 6 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, coastline 1, road 3, water 2).

Evidence: documented 0, mapped 7, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/195099196 historic=ruins 666 m from ledger point
- origin moved 665 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":6.3,"medianOutside":12.9}
- sea-1: DEM check ok {"cells":19,"medianInside":4.3,"medianOutside":13}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/16.16667/-22.93333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=6; wikidata:Q10283663 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 7 elements); data/traces/forte-duque-de-braganca-q10283663.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cape-verde.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
