# Randøya Fort

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rand-ya-fort-q2130835` |
| Coordinates | 58.10114, 8.11653 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.10114/8.11653)) |
| Wikidata | [Q2130835](https://www.wikidata.org/wiki/Q2130835) (CC0) |
| Wikidata class | fort |
| Types | fort\|cultural property |
| Administrative area | Kristiansand Municipality |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 28 elements (outline 1, coastline 1, road 9, zone 4, building 12, water 1).

Evidence: documented 0, mapped 28, inferred 0, derived 1; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/624276373 historic=yes 496 m from ledger point
- origin moved 496 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":50,"medianInside":0,"medianOutside":15.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.10114/8.11653) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|cultural property; sitelinks=2; wikidata:Q2130835 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 28 elements); data/traces/rand-ya-fort-q2130835.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
