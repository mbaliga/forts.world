# Skansin

> Faroe Islands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skansin-q1187793` |
| Coordinates | 62.00792, -6.76306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/62.00792/-6.76306)) |
| Wikidata | [Q1187793](https://www.wikidata.org/wiki/Q1187793) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Inception | 1580 |
| Wikipedia language editions | 15 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 204 elements (outline 1, marker 2, road 101, building 85, wall 9, coastline 3, water 2).

Evidence: documented 0, mapped 204, inferred 0, derived 2; heights documented 1, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/74484321 historic=fort Q1187793 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":74,"medianInside":58.6,"medianOutside":61.3}
- sea-1: DEM check failed {"cells":60,"medianInside":52.4,"medianOutside":62.5}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/62.00792/-6.76306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=15; wikidata:Q1187793 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 204 elements); data/traces/skansin-q1187793.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/faroe-islands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
