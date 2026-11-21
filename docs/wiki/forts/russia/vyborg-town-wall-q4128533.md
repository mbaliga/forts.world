# Vyborg town wall

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vyborg-town-wall-q4128533` |
| Coordinates | 60.71305, 28.73681 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.71305/28.73681)) |
| Wikidata | [Q4128533](https://www.wikidata.org/wiki/Q4128533) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|architectural landmark\|city walls |
| Administrative area | Vyborg |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | http://vyborgmuseum.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 8, road 258, building 19, coastline 11, wall 15, retaining-wall 16, cliff 11, zone 16, water 3).

Evidence: documented 0, mapped 358, inferred 0, derived 3; heights documented 20, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19317626 historic=castle Q2272243 543 m from ledger point
- island ring (18213 m2) cut out of sea-0
- origin moved 546 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":402,"medianInside":11.2,"medianOutside":20.1}
- sea-1: DEM check failed {"cells":483,"medianInside":11.9,"medianOutside":18.4}
- sea-2: DEM check failed {"cells":429,"medianInside":12,"medianOutside":12.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.71305/28.73681) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|architectural landmark\|city walls; sitelinks=7; wikidata:Q4128533 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/vyborg-town-wall-q4128533.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
