# Ephraim-Palais

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ephraim-palais-q878325` |
| Coordinates | 52.51587, 13.40714 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.51587/13.40714)) |
| Wikidata | [Q878325](https://www.wikidata.org/wiki/Q878325) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|art museum\|city palace\|residential building |
| Administrative area | Bezirk Mitte |
| Inception | 1762 |
| Designations | architectural heritage monument |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |
| OSM `description` | Rekonstruktion des abgerissenen Palais Ephraim (1762-66) |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 10, road 199, building 58, zone 7, waterway 12, wall 1, water 2, retaining-wall 1).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 48, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/285972948 historic=castle Q878325 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.51587/13.40714) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|art museum\|city palace\|residential building; sitelinks=9; wikidata:Q878325 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/ephraim-palais-q878325.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
