# Fort Kościuszko

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-kosciuszko-q11698486` |
| Coordinates | 50.0547, 19.8928 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.0547/19.8928)) |
| Wikidata | [Q11698486](https://www.wikidata.org/wiki/Q11698486) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kraków |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 354 elements (outline 1, marker 7, road 200, building 57, zone 56, wall 62, retaining-wall 19, cliff 2).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 2, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1326099938 historic=fort Q11698486 28 m from ledger point
- roads capped: kept the 150 longest of 200 mapped (trace size budget); minor lanes are not drawn
- origin moved 29 m from the ledger point to the outline centroid
- 78 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.0547/19.8928) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q11698486 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 354 elements); data/traces/fort-kosciuszko-q11698486.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
