# Caesaraugusta

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `caesaraugusta-q2932882` |
| Coordinates | 41.65425, -0.87754 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.65425/-0.87754)) |
| Wikidata | [Q2932882](https://www.wikidata.org/wiki/Q2932882) (CC0) |
| Wikidata class | fort |
| Types | Roman colony\|fortified town\|colonia augusta |
| Administrative area | Hispania Tarraconensis |
| Inception | -0013 |
| Wikipedia language editions | 14 |
| OSM `historic` | archaeological_site |
| OSM `description` | El teatro romano de Caesaraugusta es un teatro de la época romana construido en la primera mitad del siglo I d. C. (gobiernos de Tiberio y Claudio) en Caesar Augusta, actual Zaragoza. Tenía capacidad para unos seis mil espectadores. |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 1, road 283, waterway 2, building 246, wall 10, zone 1, water 1).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 74, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/786826266 historic=archaeological_site Q583459 232 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 246 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 283 mapped (trace size budget); minor lanes are not drawn
- origin moved 233 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.65425/-0.87754) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; Roman colony\|fortified town\|colonia augusta; sitelinks=14; wikidata:Q2932882 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/caesaraugusta-q2932882.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
