# Torr a'Chaisteal

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torr-a-chaisteal-q2057282` |
| Coordinates | 55.45897, -5.28846 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.45897/-5.28846)) |
| Wikidata | [Q2057282](https://www.wikidata.org/wiki/Q2057282) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|dun\|archaeological site |
| Administrative area | North Ayrshire |
| Designations | scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | dun |
| OSM `website` | https://www.historicenvironment.scot/visit-a-place/places/torr-achaisteal-dun |

## What the model contains

Tier **T1**, status `outline-only`, 4 elements (outline 1, road 2, coastline 1).

Evidence: documented 0, mapped 4, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1361425909 historic=archaeological_site Q2057282 2 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.45897/-5.28846) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|dun\|archaeological site; sitelinks=3; wikidata:Q2057282 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 4 elements); data/traces/torr-a-chaisteal-q2057282.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
