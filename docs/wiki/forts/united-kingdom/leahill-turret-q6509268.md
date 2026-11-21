# Leahill Turret

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `leahill-turret-q6509268` |
| Coordinates | 54.97887, -2.65176 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.97887/-2.65176)) |
| Wikidata | [Q6509268](https://www.wikidata.org/wiki/Q6509268) (CC0) |
| Wikidata class | fortification |
| Types | turret\|Hadrian's Wall turret |
| Administrative area | Greenhead |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/leahill-turret-and-piper-sike-turret-hadrians-wall/ |

## What the model contains

Tier **T1**, status `outline-only`, 4 elements (outline 1, road 1, waterway 1, zone 1).

Evidence: documented 0, mapped 4, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/435104735 historic=ruins 486 m from ledger point
- origin moved 486 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.97887/-2.65176) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; turret\|Hadrian's Wall turret; sitelinks=2; wikidata:Q6509268 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 4 elements); data/traces/leahill-turret-q6509268.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
