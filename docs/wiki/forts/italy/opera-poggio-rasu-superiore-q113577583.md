# Opera Poggio Rasu Superiore

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `opera-poggio-rasu-superiore-q113577583` |
| Coordinates | 41.20158, 9.4722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.20158/9.4722)) |
| Wikidata | [Q113577583](https://www.wikidata.org/wiki/Q113577583) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | La Maddalena |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 25 elements (outline 1, road 12, wall 4, building 6, zone 1, coastline 1).

Evidence: documented 0, mapped 25, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20676259 historic=ruins 23 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 26 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.20158/9.4722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113577583 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 25 elements); data/traces/opera-poggio-rasu-superiore-q113577583.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
