# Castillo. Murallas

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-murallas-q43145029` |
| Coordinates | 43.53819, -7.04003 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.53819/-7.04003)) |
| Wikidata | [Q43145029](https://www.wikidata.org/wiki/Q43145029) (CC0) |
| Wikidata class | fortification |
| Types | monument\|city walls |
| Administrative area | Ribadeo |
| Designations | part of UNESCO World Heritage Site\|bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | building |
| OSM `description` | Casa de Indianos |

## What the model contains

Tier **T1**, status `outline+walls`, 350 elements (outline 1, coastline 1, road 106, building 220, retaining-wall 1, wall 20, waterway 1).

Evidence: documented 0, mapped 350, inferred 0, derived 0; heights documented 84, inferred 0, unknown 157.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/231458885 historic=building Q6150601 194 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 194 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.53819/-7.04003) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; monument\|city walls; sitelinks=0; wikidata:Q43145029 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 350 elements); data/traces/castillo-murallas-q43145029.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
