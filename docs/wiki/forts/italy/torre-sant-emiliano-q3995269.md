# Torre Sant'Emiliano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-sant-emiliano-q3995269` |
| Coordinates | 40.09068, 18.49645 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.09068/18.49645)) |
| Wikidata | [Q3995269](https://www.wikidata.org/wiki/Q3995269) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Otranto |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 26 elements (outline 1, marker 1, road 14, coastline 1, cliff 1, building 2, wall 3, zone 2, water 1).

Evidence: documented 0, mapped 26, inferred 0, derived 1; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/342726214 historic=ruins Q3995269 0 m from ledger point
- sea-0: DEM check ok {"cells":63,"medianInside":0,"medianOutside":18.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.09068/18.49645) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=2; wikidata:Q3995269 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 26 elements); data/traces/torre-sant-emiliano-q3995269.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
