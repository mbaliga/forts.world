# Al Khandaq Fort

> Oman · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `al-khandaq-fort-q6413993` |
| Coordinates | 24.24276, 55.77115 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.24276/55.77115)) |
| Wikidata | [Q6413993](https://www.wikidata.org/wiki/Q6413993) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Al-Buraimi |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 104 elements (outline 1, road 83, building 15, wall 1, zone 1, waterway 2).

Evidence: documented 0, mapped 104, inferred 0, derived 0; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/223122148 historic=citywalls 42 m from ledger point
- origin moved 48 m from the ledger point to the centre of the mapped site
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.24276/55.77115) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q6413993 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 104 elements); data/traces/al-khandaq-fort-q6413993.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/oman.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
