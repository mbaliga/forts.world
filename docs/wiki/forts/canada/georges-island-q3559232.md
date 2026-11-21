# Georges Island

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `georges-island-q3559232` |
| Coordinates | 44.64105, -63.55934 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.64105/-63.55934)) |
| Wikidata | [Q3559232](https://www.wikidata.org/wiki/Q3559232) (CC0) |
| Wikidata class | fort |
| Types | island\|fortification\|National Historic Site Administered by Parks Canada |
| Administrative area | Halifax |
| Designations | national historic site of Canada |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 121 elements (outline 1, marker 9, coastline 2, building 18, road 53, wall 9, zone 7, retaining-wall 22).

Evidence: documented 0, mapped 121, inferred 0, derived 0; heights documented 1, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/71444162 historic=fort 27 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 25 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.64105/-63.55934) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; island\|fortification\|National Historic Site Administered by Parks Canada; sitelinks=8; wikidata:Q3559232 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 121 elements); data/traces/georges-island-q3559232.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
