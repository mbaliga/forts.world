# Kanki Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kanki-castle-q11588814` |
| Coordinates | 34.79511, 134.82939 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.79511/134.82939)) |
| Wikidata | [Q11588814](https://www.wikidata.org/wiki/Q11588814) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 222 elements (outline 1, marker 2, road 78, zone 18, waterway 3, building 482).

Evidence: documented 0, mapped 222, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/905533991 historic=yes 24 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 482 mapped (trace size budget); the rest of the town is not drawn
- origin moved 24 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.79511/134.82939) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=3; wikidata:Q11588814 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 222 elements); data/traces/kanki-castle-q11588814.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
