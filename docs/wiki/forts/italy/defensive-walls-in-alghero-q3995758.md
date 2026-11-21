# Defensive walls in Alghero

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defensive-walls-in-alghero-q3995758` |
| Coordinates | 40.55695, 8.31195 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.55695/8.31195)) |
| Wikidata | [Q3995758](https://www.wikidata.org/wiki/Q3995758) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Alghero |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 7, road 193, wall 18, building 79, retaining-wall 3, coastline 1, zone 9).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 7, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1312843882 historic=citywalls 321 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 319 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.55695/8.31195) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=4; wikidata:Q3995758 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/defensive-walls-in-alghero-q3995758.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
