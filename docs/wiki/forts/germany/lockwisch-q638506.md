# Lockwisch

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lockwisch-q638506` |
| Coordinates | 53.83281, 10.86411 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.83281/10.86411)) |
| Wikidata | [Q638506](https://www.wikidata.org/wiki/Q638506) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|hill_fort\|Ortsteil\|municipality without town privileges in Germany |
| Administrative area | Schönberg |
| Wikipedia language editions | 29 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `description` | slawischer Burgwall, derzeit überwiegend mit Eichen und Erlen bewachsen |

## What the model contains

Tier **T1**, status `outline-only`, 68 elements (outline 1, water 3, road 20, waterway 11, zone 13, building 20).

Evidence: documented 0, mapped 68, inferred 0, derived 0; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1549731615 historic=archaeological_site Q638506 21 m from ledger point
- origin moved 18 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.83281/10.86411) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|hill_fort\|Ortsteil\|municipality without town privileges in Germany; sitelinks=29; wikidata:Q638506 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 68 elements); data/traces/lockwisch-q638506.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
