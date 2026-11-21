# Türkentor mit Zwingermauer

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `turkentor-mit-zwingermauer-q37951252` |
| Coordinates | 47.91443, 16.69341 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.91443/16.69341)) |
| Wikidata | [Q37951252](https://www.wikidata.org/wiki/Q37951252) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Purbach am Neusiedlersee |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 0 |
| OSM `historic` | city_gate |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 244 elements (outline 1, marker 3, road 65, wall 45, building 289, zone 6, waterway 4).

Evidence: documented 0, mapped 244, inferred 0, derived 0; heights documented 26, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/195325638 historic=city_gate Q37951252 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 289 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.91443/16.69341) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q37951252 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 244 elements); data/traces/turkentor-mit-zwingermauer-q37951252.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 244 elements; outline osm:way/195325638 historic=city_gate Q37951252 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
