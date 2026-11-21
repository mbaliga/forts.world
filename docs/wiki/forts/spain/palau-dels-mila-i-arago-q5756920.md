# Palau dels Milà i Aragó

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palau-dels-mila-i-arago-q5756920` |
| Coordinates | 38.84195, -0.51922 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.84195/-0.51922)) |
| Wikidata | [Q5756920](https://www.wikidata.org/wiki/Q5756920) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Albaida |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, marker 3, road 89, building 355, zone 2, waterway 1, wall 61, retaining-wall 1).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 14, inferred 0, unknown 168.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/311018537 historic=manor Q5756920 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 355 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.84195/-0.51922) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=4; wikidata:Q5756920 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 276 elements); data/traces/palau-dels-mila-i-arago-q5756920.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 278 elements; outline osm:way/311018537 historic=manor Q5756920 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
