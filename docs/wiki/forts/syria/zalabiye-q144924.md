# Zalabiye

> Syria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zalabiye-q144924` |
| Coordinates | 35.6685, 39.8425 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.6685/39.8425)) |
| Wikidata | [Q144924](https://www.wikidata.org/wiki/Q144924) (CC0) |
| Wikidata class | castle |
| Types | rock castle\|archaeological site |
| Administrative area | Deir ez-Zor Governorate |
| Wikipedia language editions | 8 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |

## What the model contains

Tier **T1**, status `outline+walls`, 21 elements (outline 1, marker 1, waterway 4, wall 3, zone 1, building 1, road 2, cliff 8).

Evidence: documented 0, mapped 21, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6091679 historic=archaeological_site Q144924 14 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.6685/39.8425) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; rock castle\|archaeological site; sitelinks=8; wikidata:Q144924 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 21 elements); data/traces/zalabiye-q144924.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/syria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
