# Christianpris

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `christianpris-q827096` |
| Coordinates | 54.39139, 10.18611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.39139/10.18611)) |
| Wikidata | [Q827096](https://www.wikidata.org/wiki/Q827096) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Kiel |
| Designations | Heritage monument in Schleswig-Holstein |
| Wikipedia language editions | 6 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 57 elements (outline 1, marker 1, road 41, water 2, building 9, waterway 1, zone 1, coastline 1).

Evidence: documented 0, mapped 57, inferred 0, derived 0; heights documented 1, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/95602326 historic=yes 170 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 172 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.39139/10.18611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=6; wikidata:Q827096 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 57 elements); data/traces/christianpris-q827096.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
