# Vorontsov Palace

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vorontsov-palace-q1976673` |
| Coordinates | 46.49011, 30.73876 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.49011/30.73876)) |
| Wikidata | [Q1976673](https://www.wikidata.org/wiki/Q1976673) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Odesa |
| Inception | 1826 |
| Designations | cultural heritage site in Ukraine |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 262 elements (outline 1, marker 5, road 131, building 80, zone 18, retaining-wall 5, wall 19, cliff 1, coastline 1, water 1).

Evidence: documented 0, mapped 262, inferred 0, derived 1; heights documented 65, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1044305432 historic=castle Q1976673 2 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":24.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.49011/30.73876) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=8; wikidata:Q1976673 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 262 elements); data/traces/vorontsov-palace-q1976673.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
