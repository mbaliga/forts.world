# Castle of Fougères

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-fougeres-q724929` |
| Coordinates | 48.3536, -1.20944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.3536/-1.20944)) |
| Wikidata | [Q724929](https://www.wikidata.org/wiki/Q724929) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fougères |
| Inception | 1200 |
| Designations | classified historical monument |
| Wikipedia language editions | 12 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 2, road 135, water 5, building 320, waterway 16, zone 3, wall 10, cliff 1, retaining-wall 3).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 4, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/360211456 historic=archaeological_site 44 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 320 mapped (trace size budget); the rest of the town is not drawn
- origin moved 46 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.3536/-1.20944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=12; wikidata:Q724929 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/castle-of-fougeres-q724929.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
