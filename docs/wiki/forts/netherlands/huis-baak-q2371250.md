# Huis Baak

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `huis-baak-q2371250` |
| Coordinates | 52.07754, 6.23276 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.07754/6.23276)) |
| Wikidata | [Q2371250](https://www.wikidata.org/wiki/Q2371250) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|house |
| Administrative area | Bronckhorst |
| Inception | 1900 |
| Designations | Rijksmonument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |
| OSM `website` | https://www.landgoedbaak.nl |

## What the model contains

Tier **T1**, status `outline+walls`, 105 elements (outline 1, road 20, water 5, zone 20, building 57, waterway 1, wall 1).

Evidence: documented 0, mapped 105, inferred 0, derived 0; heights documented 0, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/54547750 historic=castle Q2371250 5 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.07754/6.23276) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|house; sitelinks=1; wikidata:Q2371250 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 105 elements); data/traces/huis-baak-q2371250.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
