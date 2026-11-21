# Odesa Quarantine

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `odesa-quarantine-q13360164` |
| Coordinates | 46.48241, 30.75488 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.48241/30.75488)) |
| Wikidata | [Q13360164](https://www.wikidata.org/wiki/Q13360164) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Odesa |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 80 elements (outline 1, marker 2, road 43, building 23, zone 8, wall 1, coastline 1, retaining-wall 1).

Evidence: documented 0, mapped 80, inferred 0, derived 0; heights documented 4, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8910571 historic=yes 612 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 613 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.48241/30.75488) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=3; wikidata:Q13360164 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 80 elements); data/traces/odesa-quarantine-q13360164.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
