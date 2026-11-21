# Drottningholm Palace

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `drottningholm-palace-q208559` |
| Coordinates | 59.32166, 17.88682 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.32166/17.88682)) |
| Wikidata | [Q208559](https://www.wikidata.org/wiki/Q208559) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|museum\|architectural ensemble\|cultural property\|heritage site in Sweden\|royal palace |
| Administrative area | Ekerö Municipality |
| Inception | 1699 |
| Designations | governmental listed building complex\|World Heritage Site |
| UNESCO WHC id | 559 |
| Wikipedia language editions | 59 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 1 |
| OSM `description` | The royal summerpalace |
| OSM `website` | https://www.kungahuset.se/ |

## What the model contains

Tier **T1**, status `outline+walls`, 102 elements (outline 1, marker 1, building 11, road 57, water 6, zone 18, wall 8).

Evidence: documented 0, mapped 102, inferred 0, derived 0; heights documented 5, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3182815 historic=castle Q208559 1 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.32166/17.88682) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|museum\|architectural ensemble\|cultural property\|heritage site in Sweden\|royal palace; sitelinks=59; wikidata:Q208559 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 102 elements); data/traces/drottningholm-palace-q208559.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
