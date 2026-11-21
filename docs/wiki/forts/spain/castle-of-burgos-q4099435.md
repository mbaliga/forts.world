# Castle of Burgos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-burgos-q4099435` |
| Coordinates | 42.3428, -3.70722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.3428/-3.70722)) |
| Wikidata | [Q4099435](https://www.wikidata.org/wiki/Q4099435) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Burgos |
| Inception | 0900 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://turismo.aytoburgos.es/los-top-5/castillo-y-mirador/ |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 6, road 209, wall 50, building 73, retaining-wall 14, zone 3, water 1, waterway 1).

Evidence: documented 0, mapped 358, inferred 0, derived 0; heights documented 28, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4785048 historic=castle Q4099435 11 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.3428/-3.70722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=10; wikidata:Q4099435 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/castle-of-burgos-q4099435.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
