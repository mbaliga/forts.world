# Geneva fortifications at Saint-Antoine

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `geneva-fortifications-at-saint-antoine-q29700255` |
| Coordinates | 46.19979, 6.15086 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.19979/6.15086)) |
| Wikidata | [Q29700255](https://www.wikidata.org/wiki/Q29700255) (CC0) |
| Wikidata class | fort |
| Types | bastion\|built structure\|curtain wall |
| Administrative area | Genève-Cité |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `website` | https://www.geneve.ch/fontaine-saint-leger |

## What the model contains

Tier **T1**, status `outline+walls`, 359 elements (outline 1, marker 33, road 318, building 224, retaining-wall 14, wall 24, zone 14, water 3).

Evidence: documented 0, mapped 359, inferred 0, derived 0; heights documented 8, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1569942789 historic=yes 203 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 224 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 318 mapped (trace size budget); minor lanes are not drawn
- origin moved 203 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.19979/6.15086) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; bastion\|built structure\|curtain wall; sitelinks=1; wikidata:Q29700255 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 359 elements); data/traces/geneva-fortifications-at-saint-antoine-q29700255.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
