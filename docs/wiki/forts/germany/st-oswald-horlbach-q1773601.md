# St. Oswald (Hörlbach)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-oswald-horlbach-q1773601` |
| Coordinates | 49.0735, 10.9417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.0735/10.9417)) |
| Wikidata | [Q1773601](https://www.wikidata.org/wiki/Q1773601) (CC0) |
| Wikidata class | fort |
| Types | church building\|filial church\|choir tower church\|fortified church |
| Administrative area | Ellingen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | church |

## What the model contains

Tier **T1**, status `outline+walls`, 48 elements (outline 1, zone 19, road 10, water 1, building 10, wall 1, waterway 6).

Evidence: documented 0, mapped 48, inferred 0, derived 0; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/143987903 historic=church Q1773601 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.0735/10.9417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; church building\|filial church\|choir tower church\|fortified church; sitelinks=2; wikidata:Q1773601 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 47 elements); data/traces/st-oswald-horlbach-q1773601.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 48 elements; outline osm:way/143987903 historic=church Q1773601 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
