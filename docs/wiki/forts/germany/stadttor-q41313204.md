# Stadttor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-q41313204` |
| Coordinates | 49.79193, 9.9274 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.79193/9.9274)) |
| Wikidata | [Q41313204](https://www.wikidata.org/wiki/Q41313204) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Würzburg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | city_gate |
| OSM `barrier` | entrance |
| OSM `website` | https://wuerzburgwiki.de/wiki/Schwanentor |

## What the model contains

Tier **T1**, status `outline+walls`, 208 elements (outline 1, marker 65, road 287, building 214, water 8, waterway 15, wall 32, retaining-wall 24, zone 8).

Evidence: documented 0, mapped 208, inferred 0, derived 0; heights documented 26, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14750334 historic=city_gate Q41313204 1 m from ledger point
- pruned to the outline plus 150 m: 654 -> 281 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 104 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 109 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.79193/9.9274) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q41313204 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 351 elements); data/traces/stadttor-q41313204.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 208 elements; outline osm:relation/14750334 historic=city_gate Q41313204 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
