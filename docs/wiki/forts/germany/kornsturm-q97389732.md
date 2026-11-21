# Kornsturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kornsturm-q97389732` |
| Coordinates | 51.29721, 6.85231 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.29721/6.85231)) |
| Wikidata | [Q97389732](https://www.wikidata.org/wiki/Q97389732) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Ratingen Mitte |
| Inception | 1464 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 1 |
| OSM `historic` | tower |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 16, road 138, building 472, water 1, waterway 2, wall 17).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 85, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/188094132 historic=tower Q97389732 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 472 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.29721/6.85231) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q97389732 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 319 elements); data/traces/kornsturm-q97389732.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 295 elements; outline osm:way/188094132 historic=tower Q97389732 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
