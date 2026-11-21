# Chiyogasaki Gun Battery Site

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chiyogasaki-gun-battery-site-q109734882` |
| Coordinates | 35.22967, 139.72517 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.22967/139.72517)) |
| Wikidata | [Q109734882](https://www.wikidata.org/wiki/Q109734882) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Yokosuka |
| Inception | 1895 |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 180 elements (outline 1, marker 6, road 52, wall 1, building 109, coastline 1, waterway 1, zone 5, retaining-wall 4).

Evidence: documented 0, mapped 180, inferred 0, derived 0; heights documented 0, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/626401256 historic=fort Q109734882 22 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 18 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.22967/139.72517) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q109734882 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 180 elements); data/traces/chiyogasaki-gun-battery-site-q109734882.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
