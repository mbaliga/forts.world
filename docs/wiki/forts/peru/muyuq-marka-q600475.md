# Muyuq Marka

> Peru · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muyuq-marka-q600475` |
| Coordinates | -13.50901, -71.9828 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-13.50901/-71.9828)) |
| Wikidata | [Q600475](https://www.wikidata.org/wiki/Q600475) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|yes\|archaeological site |
| Administrative area | Cusco |
| Wikipedia language editions | 7 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 127 elements (outline 1, marker 1, road 29, zone 6, wall 82, retaining-wall 3, building 4).

Evidence: documented 0, mapped 127, inferred 0, derived 0; heights documented 0, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/952590936 historic=citywalls 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-13.50901/-71.9828) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|yes\|archaeological site; sitelinks=7; wikidata:Q600475 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 127 elements); data/traces/muyuq-marka-q600475.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/peru.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
