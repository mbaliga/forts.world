# Defensive walls in Jelenia Góra

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defensive-walls-in-jelenia-gora-q30055483` |
| Coordinates | 50.90358, 15.73195 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.90358/15.73195)) |
| Wikidata | [Q30055483](https://www.wikidata.org/wiki/Q30055483) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|city walls |
| Administrative area | Jelenia Góra |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, marker 1, road 205, building 317, zone 12, waterway 4, wall 6).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 35, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204592026 historic=yes 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 317 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 205 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.90358/15.73195) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|city walls; sitelinks=1; wikidata:Q30055483 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/defensive-walls-in-jelenia-gora-q30055483.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
