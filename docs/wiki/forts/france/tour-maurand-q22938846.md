# Tour Maurand

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-maurand-q22938846` |
| Coordinates | 43.60712, 1.44231 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.60712/1.44231)) |
| Wikidata | [Q22938846](https://www.wikidata.org/wiki/Q22938846) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Toulouse |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, road 232, building 351, zone 12, wall 46, retaining-wall 7).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 58, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/60538086 historic=yes 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 351 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 232 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.60712/1.44231) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q22938846 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/tour-maurand-q22938846.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
