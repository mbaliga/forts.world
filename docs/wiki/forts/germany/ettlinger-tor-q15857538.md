# Ettlinger Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ettlinger-tor-q15857538` |
| Coordinates | 49.00556, 8.40353 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.00556/8.40353)) |
| Wikidata | [Q15857538](https://www.wikidata.org/wiki/Q15857538) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Karlsruhe |
| Inception | 1803 |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `description` | Treppenaufgang und verbliebene Teile des Fundaments (Hauptgebäude) |
| OSM `website` | https://ka.stadtwiki.net/Amalienschl%C3%B6sschen |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 3, road 259, building 107, water 3, waterway 1, zone 22, wall 8, retaining-wall 4).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 35, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/821982261 historic=ruins Q15791864 335 m from ledger point
- roads capped: kept the 150 longest of 259 mapped (trace size budget); minor lanes are not drawn
- origin moved 335 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.00556/8.40353) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q15857538 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/ettlinger-tor-q15857538.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
