# Festung Bergen

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `festung-bergen-q16636116` |
| Coordinates | 60.39137, 5.2874 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.39137/5.2874)) |
| Wikidata | [Q16636116](https://www.wikidata.org/wiki/Q16636116) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 316 elements (outline 1, marker 1, road 171, building 132, coastline 2, zone 8, water 1).

Evidence: documented 0, mapped 316, inferred 0, derived 1; heights documented 40, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/151468456 historic=yes Q31081247 58 m from ledger point
- origin moved 58 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":133,"medianInside":0,"medianOutside":10.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.39137/5.2874) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q16636116 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 316 elements); data/traces/festung-bergen-q16636116.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
