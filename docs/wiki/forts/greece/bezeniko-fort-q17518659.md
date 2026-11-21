# Bezeniko Fort

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bezeniko-fort-q17518659` |
| Coordinates | 37.71535, 22.25508 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.71535/22.25508)) |
| Wikidata | [Q17518659](https://www.wikidata.org/wiki/Q17518659) (CC0) |
| Wikidata class | ruin |
| Types | human settlement\|fort\|ruins |
| Administrative area | Tripoli Municipality |
| Inception | 1500 |
| Designations | protected building in Greece |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 16 elements (marker 1, road 15).

Evidence: documented 0, mapped 16, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20173646 historic=yes Q5601808 29485 m from ledger point
- site is a route relation of 254 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (66865 x 70041 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.71535/22.25508) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; human settlement\|fort\|ruins; sitelinks=1; wikidata:Q17518659 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/bezeniko-fort-q17518659.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
