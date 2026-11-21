# Prenzlauer Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `prenzlauer-tor-q23777590` |
| Coordinates | 53.11969, 13.5039 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.11969/13.5039)) |
| Wikidata | [Q23777590](https://www.wikidata.org/wiki/Q23777590) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Templin |
| Designations | architectural heritage monument in Brandenburg |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 359 elements (outline 1, road 187, zone 53, building 298, wall 33, waterway 2).

Evidence: documented 0, mapped 359, inferred 0, derived 0; heights documented 28, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/216939178 historic=yes Q23473818 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 298 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 187 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.11969/13.5039) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q23777590 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 359 elements); data/traces/prenzlauer-tor-q23777590.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
