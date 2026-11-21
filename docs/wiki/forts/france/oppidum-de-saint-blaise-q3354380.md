# Oppidum de Saint-Blaise

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oppidum-de-saint-blaise-q3354380` |
| Coordinates | 43.4618, 4.98262 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.4618/4.98262)) |
| Wikidata | [Q3354380](https://www.wikidata.org/wiki/Q3354380) (CC0) |
| Wikidata class | fortification |
| Types | oppidum\|archaeological site |
| Administrative area | Saint-Mitre-les-Remparts |
| Designations | classified historical monument |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 63 elements (outline 1, marker 2, road 38, water 2, zone 1, building 7, wall 5, cliff 7).

Evidence: documented 0, mapped 63, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/257057295 historic=archaeological_site Q3354380 80 m from ledger point
- origin moved 86 m from the ledger point to the centre of the mapped site
- 6561 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.4618/4.98262) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; oppidum\|archaeological site; sitelinks=3; wikidata:Q3354380 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 63 elements); data/traces/oppidum-de-saint-blaise-q3354380.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
