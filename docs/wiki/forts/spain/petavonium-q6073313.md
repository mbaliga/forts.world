# Petavonium

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `petavonium-q6073313` |
| Coordinates | 42.08865, -5.99784 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.08865/-5.99784)) |
| Wikidata | [Q6073313](https://www.wikidata.org/wiki/Q6073313) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|castrum\|Roman city\|monument\|ancient Roman structure\|Archaeological Site |
| Administrative area | Santibáñez de Vidriales |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |
| OSM `barrier` | wall |
| OSM `website` | https://www.turismocastillayleon.com/es/patrimonio-cultura/petavonium |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, road 24, building 5, zone 8, wall 6, waterway 1).

Evidence: documented 0, mapped 46, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14742761 historic=archaeological_site Q6073313 9 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.08865/-5.99784) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|castrum\|Roman city\|monument\|ancient Roman structure\|Archaeological Site; sitelinks=5; wikidata:Q6073313 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/petavonium-q6073313.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
