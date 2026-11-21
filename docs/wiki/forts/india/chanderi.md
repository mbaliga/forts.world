# Chanderi

> India · Madhya Pradesh · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chanderi` |
| Coordinates | 24.72, 78.13 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.72/78.13)) |
| Wikidata | [Q2721669](https://www.wikidata.org/wiki/Q2721669) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Chanderi |
| Designations | Monument of National Importance |
| Wikipedia language editions | 6 |
| Programme catalogue | confidence high, significance rank 249; sources catalogue:chanderi;wikidata:Q2721669;smith-newton:r1312 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 5 elements (outline 1, road 2, zone 1, wall 1).

Evidence: documented 0, mapped 5, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9972531 historic=fort Q2721669 2027 m from ledger point
- origin moved 2032 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.72/78.13) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Ledger note

Alpha-D batch (2026-11-14): 10 forts spread across A-Z starting at D (batch-alpha-D.csv). coords from wikidata (was 24.718,78.135) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 5 elements); data/traces/chanderi.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
