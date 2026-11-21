# Rustertor (früher Türkentor)

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rustertor-fruher-turkentor-q37951262` |
| Coordinates | 47.91119, 16.69586 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.91119/16.69586)) |
| Wikidata | [Q37951262](https://www.wikidata.org/wiki/Q37951262) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Purbach am Neusiedlersee |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 0 |
| OSM `historic` | city_gate |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 1, road 32, building 282, wall 40, zone 1, waterway 1).

Evidence: documented 0, mapped 358, inferred 0, derived 0; heights documented 23, inferred 0, unknown 299.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/195117380 historic=city_gate Q37951262 6 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.91119/16.69586) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q37951262 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 356 elements); data/traces/rustertor-fruher-turkentor-q37951262.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 358 elements; outline osm:way/195117380 historic=city_gate Q37951262 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
