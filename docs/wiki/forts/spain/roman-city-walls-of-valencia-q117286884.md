# Roman city walls of Valencia

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `roman-city-walls-of-valencia-q117286884` |
| Coordinates | 39.47469, -0.37428 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.47469/-0.37428)) |
| Wikidata | [Q117286884](https://www.wikidata.org/wiki/Q117286884) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|city walls |
| Administrative area | Ciutat Vella |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 3, road 162, building 307, water 1, wall 5, zone 9).

Evidence: documented 0, mapped 289, inferred 0, derived 0; heights documented 5, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/495741186 historic=castle Q11697429 240 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 307 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 162 mapped (trace size budget); minor lanes are not drawn
- origin moved 241 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.47469/-0.37428) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|city walls; sitelinks=1; wikidata:Q117286884 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/roman-city-walls-of-valencia-q117286884.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
