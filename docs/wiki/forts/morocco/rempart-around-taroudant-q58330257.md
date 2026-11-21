# Rempart around Taroudant

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rempart-around-taroudant-q58330257` |
| Coordinates | 30.4713, -8.87139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/30.4713/-8.87139)) |
| Wikidata | [Q58330257](https://www.wikidata.org/wiki/Q58330257) (CC0) |
| Wikidata class | fortification |
| Types | heritage\|city walls |
| Administrative area | Taroudant |
| Designations | Moroccan cultural heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, marker 1, road 64, wall 24, zone 2, building 628).

Evidence: documented 0, mapped 212, inferred 0, derived 0; heights documented 7, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/758755658 historic=tomb 275 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 628 mapped (trace size budget); the rest of the town is not drawn
- origin moved 274 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/30.4713/-8.87139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; heritage\|city walls; sitelinks=1; wikidata:Q58330257 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/rempart-around-taroudant-q58330257.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
