# Vestre batteri

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vestre-batteri-q108728427` |
| Coordinates | 58.13348, 8.00112 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.13348/8.00112)) |
| Wikidata | [Q108728427](https://www.wikidata.org/wiki/Q108728427) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Kristiansand Municipality |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 117 elements (outline 1, marker 6, road 60, pit 2, building 32, cliff 2, zone 5, retaining-wall 2, wall 5, coastline 1, water 1).

Evidence: documented 0, mapped 117, inferred 0, derived 1; heights documented 5, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/104838730 historic=fort 191 m from ledger point
- origin moved 191 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":55,"medianInside":0,"medianOutside":61.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.13348/8.00112) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q108728427 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 117 elements); data/traces/vestre-batteri-q108728427.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
