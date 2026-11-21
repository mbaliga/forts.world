# Gooty

> India · Andhra Pradesh · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gooty` |
| Coordinates | 15.113582, 77.650304 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.113582/77.650304)) |
| Wikidata | [Q15698570](https://www.wikidata.org/wiki/Q15698570) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Gooty mandal |
| Designations | Monument of National Importance |
| Wikipedia language editions | 5 |
| Programme catalogue | confidence high, significance rank 258; sources catalogue:gooty;wikidata:Q15698570;smith-newton:r190 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 5 elements (outline 1, road 2, wall 1, building 1).

Evidence: documented 0, mapped 5, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/322960645 historic=castle Q15698570 39 m from ledger point
- origin moved 48 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.113582/77.650304) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

coords from wikidata (was 15.11,77.64) Alpha-R batch (2026-11-11): 10 forts spread across A-Z starting at R, distinct from batch 0 and other alphabet batches. \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 5 elements); data/traces/gooty.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
