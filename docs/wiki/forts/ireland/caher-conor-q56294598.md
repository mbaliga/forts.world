# Caher Conor

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `caher-conor-q56294598` |
| Coordinates | 52.10165, -10.42138 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.10165/-10.42138)) |
| Wikidata | [Q56294598](https://www.wikidata.org/wiki/Q56294598) (CC0) |
| Wikidata class | fort |
| Types | ringfort\|archaeological site |
| Administrative area | County Kerry |
| Designations | national monument of Ireland |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | ringfort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 19 elements (outline 1, coastline 2, road 6, cliff 1, building 5, wall 1, zone 1, water 2).

Evidence: documented 0, mapped 19, inferred 0, derived 2; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/367079336 historic=archaeological_site 1 m from ledger point
- sea-0: DEM check failed {"cells":1,"medianInside":16.5,"medianOutside":84}
- sea-1: DEM check failed {"cells":12,"medianInside":19.9,"medianOutside":85.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.10165/-10.42138) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; ringfort\|archaeological site; sitelinks=1; wikidata:Q56294598 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 19 elements); data/traces/caher-conor-q56294598.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
