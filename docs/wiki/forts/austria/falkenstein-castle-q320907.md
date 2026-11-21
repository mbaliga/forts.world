# Falkenstein Castle

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `falkenstein-castle-q320907` |
| Coordinates | 48.72403, 16.57909 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.72403/16.57909)) |
| Wikidata | [Q320907](https://www.wikidata.org/wiki/Q320907) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|yes\|museum\|ruins\|historic building |
| Administrative area | Falkenstein |
| Inception | 1050 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | wall |
| OSM `website` | https://www.burgruine-falkenstein.at/cs/ |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, marker 1, road 22, wall 8, building 8, zone 4).

Evidence: documented 0, mapped 45, inferred 0, derived 0; heights documented 1, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/93951163 historic=castle Q320907 17 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.72403/16.57909) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|yes\|museum\|ruins\|historic building; sitelinks=6; wikidata:Q320907 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/falkenstein-castle-q320907.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
