# Agios Andreas Fortress

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `agios-andreas-fortress-q111376475` |
| Coordinates | 37.3693, 22.784 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.3693/22.784)) |
| Wikidata | [Q111376475](https://www.wikidata.org/wiki/Q111376475) (CC0) |
| Wikidata class | fort |
| Types | fortress\|archaeological site |
| Administrative area | North Kynouria Municipality |
| Inception | -0350 |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 22 elements (outline 1, marker 1, coastline 3, waterway 1, road 13, building 1, water 2).

Evidence: documented 0, mapped 22, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1556413976 historic=ruins 125 m from ledger point
- origin moved 134 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":283,"medianInside":0,"medianOutside":13}
- sea-1: DEM check ok {"cells":9,"medianInside":0,"medianOutside":8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.3693/22.784) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|archaeological site; sitelinks=0; wikidata:Q111376475 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 22 elements); data/traces/agios-andreas-fortress-q111376475.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
