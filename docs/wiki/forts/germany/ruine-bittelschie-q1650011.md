# Ruine Bittelschieß

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ruine-bittelschie-q1650011` |
| Coordinates | 48.1067, 9.25625 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.1067/9.25625)) |
| Wikidata | [Q1650011](https://www.wikidata.org/wiki/Q1650011) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Bingen |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | wall |
| OSM `website` | http://www.ruine-hornstein.de |

## What the model contains

Tier **T1**, status `outline+walls`, 71 elements (outline 1, marker 2, zone 3, waterway 4, road 24, building 35, wall 1).

Evidence: documented 0, mapped 71, inferred 0, derived 0; heights documented 0, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/116629840 historic=castle Q1012498 588 m from ledger point
- origin moved 587 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.1067/9.25625) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q1650011 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 71 elements); data/traces/ruine-bittelschie-q1650011.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
