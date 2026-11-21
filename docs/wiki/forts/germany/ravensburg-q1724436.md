# Ravensburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ravensburg-q1724436` |
| Coordinates | 53.5735, 13.3138 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.5735/13.3138)) |
| Wikidata | [Q1724436](https://www.wikidata.org/wiki/Q1724436) (CC0) |
| Wikidata class | fort |
| Types | hillfort\|archaeological site |
| Administrative area | Neubrandenburg |
| Designations | archaeological monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `heritage` | yes |
| OSM `description` | Reste von einem slawischen Burgwall (ein recht kleiner Ringwall) |

## What the model contains

Tier **T1**, status `outline-only`, 16 elements (outline 1, road 11, waterway 2, zone 2).

Evidence: documented 0, mapped 16, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1550106585 historic=archaeological_site Q1724436 115 m from ledger point
- origin moved 107 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.5735/13.3138) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort\|archaeological site; sitelinks=2; wikidata:Q1724436 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 16 elements); data/traces/ravensburg-q1724436.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
