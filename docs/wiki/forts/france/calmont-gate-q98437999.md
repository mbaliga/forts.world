# Calmont Gate

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `calmont-gate-q98437999` |
| Coordinates | 47.65462, -2.75734 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.65462/-2.75734)) |
| Wikidata | [Q98437999](https://www.wikidata.org/wiki/Q98437999) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Vannes |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 362 elements (outline 1, marker 4, road 344, waterway 3, building 400, wall 27, water 3, zone 18, coastline 2, retaining-wall 34).

Evidence: documented 0, mapped 362, inferred 0, derived 1; heights documented 27, inferred 0, unknown 154.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/145189104 historic=citywalls 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 400 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 344 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":21,"medianInside":4.3,"medianOutside":11.9}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.65462/-2.75734) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q98437999 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 362 elements); data/traces/calmont-gate-q98437999.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
