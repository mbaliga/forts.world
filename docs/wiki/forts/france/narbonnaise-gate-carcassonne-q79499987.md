# Narbonnaise Gate (Carcassonne)

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `narbonnaise-gate-carcassonne-q79499987` |
| Coordinates | 43.20678, 2.36569 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.20678/2.36569)) |
| Wikidata | [Q79499987](https://www.wikidata.org/wiki/Q79499987) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Aude |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 7, road 311, building 1392, zone 11, retaining-wall 9, wall 8, waterway 3).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 12, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20188714 historic=citywalls 158 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1392 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 311 mapped (trace size budget); minor lanes are not drawn
- origin moved 161 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.20678/2.36569) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q79499987 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/narbonnaise-gate-carcassonne-q79499987.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
