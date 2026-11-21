# Tis Castle

> Iran · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tis-castle-q5947489` |
| Coordinates | 25.35431, 60.60703 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.35431/60.60703)) |
| Wikidata | [Q5947489](https://www.wikidata.org/wiki/Q5947489) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural property |
| Administrative area | Chabahar County |
| Designations | Iranian National Heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 23 elements (outline 1, marker 1, road 14, coastline 1, building 1, cliff 1, waterway 2, zone 1, water 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/457290227 historic=ruins 8 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":7,"medianInside":2.4,"medianOutside":10.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.35431/60.60703) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural property; sitelinks=4; wikidata:Q5947489 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 23 elements); data/traces/tis-castle-q5947489.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/iran.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
