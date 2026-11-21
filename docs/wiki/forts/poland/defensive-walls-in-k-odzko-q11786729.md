# Defensive walls in Kłodzko

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defensive-walls-in-k-odzko-q11786729` |
| Coordinates | 50.43795, 16.65497 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.43795/16.65497)) |
| Wikidata | [Q11786729](https://www.wikidata.org/wiki/Q11786729) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|architectural heritage monument\|city walls |
| Administrative area | Kłodzko |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 229 elements (outline 1, marker 21, waterway 6, road 267, building 246, water 1, zone 35, wall 45, retaining-wall 19, cliff 7).

Evidence: documented 0, mapped 229, inferred 0, derived 0; heights documented 7, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/83719101 historic=building 41 m from ledger point
- pruned to the outline plus 150 m: 648 -> 407 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 155 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 163 mapped (trace size budget); minor lanes are not drawn
- origin moved 39 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.43795/16.65497) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|architectural heritage monument\|city walls; sitelinks=2; wikidata:Q11786729 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 229 elements); data/traces/defensive-walls-in-k-odzko-q11786729.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
