# Ritterhaus Bubikon

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ritterhaus-bubikon-q638821` |
| Coordinates | 47.26649, 8.82801 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.26649/8.82801)) |
| Wikidata | [Q638821](https://www.wikidata.org/wiki/Q638821) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|monastery\|commandry\|religious community |
| Administrative area | Bubikon |
| Inception | 1101 |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `website` | https://www.ritterhaus.ch/ |

## What the model contains

Tier **T1**, status `outline+walls`, 81 elements (outline 1, road 41, waterway 3, building 20, water 2, wall 2, zone 12).

Evidence: documented 0, mapped 81, inferred 0, derived 0; heights documented 1, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/548140156 historic=castle Q638821 9 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.26649/8.82801) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|monastery\|commandry\|religious community; sitelinks=6; wikidata:Q638821 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 81 elements); data/traces/ritterhaus-bubikon-q638821.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
