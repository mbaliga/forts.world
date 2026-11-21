# Forte de São Mateus do Cabo Frio

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-sao-mateus-do-cabo-frio-q10284039` |
| Coordinates | -22.88541, -42.0082 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-22.88541/-42.0082)) |
| Wikidata | [Q10284039](https://www.wikidata.org/wiki/Q10284039) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Cabo Frio |
| Designations | heritage asset listed by IPHAN\|Heritage of Portuguese Influence |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 14 elements (outline 1, coastline 3, road 6, zone 2, waterway 1, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/189508018 historic=fort Q10284039 16 m from ledger point
- island ring (6275 m2) cut out of sea-0
- origin moved 16 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":327,"medianInside":0.1,"medianOutside":4.1}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-22.88541/-42.0082) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=4; wikidata:Q10284039 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 14 elements); data/traces/forte-de-sao-mateus-do-cabo-frio-q10284039.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
