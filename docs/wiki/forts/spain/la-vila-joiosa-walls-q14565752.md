# La Vila Joiosa Walls

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `la-vila-joiosa-walls-q14565752` |
| Coordinates | 38.50506, -0.23175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.50506/-0.23175)) |
| Wikidata | [Q14565752](https://www.wikidata.org/wiki/Q14565752) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | La Vila Joiosa |
| Inception | 1600 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 172 elements (outline 1, coastline 1, road 115, waterway 1, building 52, zone 1, wall 1).

Evidence: documented 0, mapped 172, inferred 0, derived 0; heights documented 5, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/86877189 historic=archaeological_site Q20021633 232 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 228 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.50506/-0.23175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q14565752 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 172 elements); data/traces/la-vila-joiosa-walls-q14565752.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
