# Biton Coulibaly palace

> Mali · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `biton-coulibaly-palace-q27881676` |
| Coordinates | 13.39696, -6.35319 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/13.39696/-6.35319)) |
| Wikidata | [Q27881676](https://www.wikidata.org/wiki/Q27881676) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 165 elements (outline 1, road 40, wall 3, building 395, zone 1).

Evidence: documented 0, mapped 165, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/454173648 historic=castle Q27881676 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 395 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/13.39696/-6.35319) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace; sitelinks=1; wikidata:Q27881676 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 165 elements); data/traces/biton-coulibaly-palace-q27881676.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/mali.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
