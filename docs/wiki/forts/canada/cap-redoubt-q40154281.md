# Cap Redoubt

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cap-redoubt-q40154281` |
| Coordinates | 46.80864, -71.20517 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.80864/-71.20517)) |
| Wikidata | [Q40154281](https://www.wikidata.org/wiki/Q40154281) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | La Cité-Limoilou |
| Designations | classified federal heritage building of Canada |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 21, retaining-wall 9, road 152, building 95, zone 3, waterway 1, wall 15, cliff 2).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 15, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1553473328 historic=citywalls 15 m from ledger point
- origin moved 14 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.80864/-71.20517) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=1; wikidata:Q40154281 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/cap-redoubt-q40154281.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
