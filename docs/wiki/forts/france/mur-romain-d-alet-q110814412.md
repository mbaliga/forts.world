# Mur romain d'Alet

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mur-romain-d-alet-q110814412` |
| Coordinates | 48.63758, -2.02693 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.63758/-2.02693)) |
| Wikidata | [Q110814412](https://www.wikidata.org/wiki/Q110814412) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Saint-Malo |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 176 elements (outline 1, marker 8, road 66, zone 19, building 56, coastline 2, wall 20, cliff 2, water 2).

Evidence: documented 0, mapped 176, inferred 0, derived 2; heights documented 6, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/54284375 historic=castle Q106411555 225 m from ledger point
- origin moved 225 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":36,"medianInside":0,"medianOutside":0.9}
- sea-1: DEM check ok {"cells":276,"medianInside":0,"medianOutside":19.5}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.63758/-2.02693) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=1; wikidata:Q110814412 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 176 elements); data/traces/mur-romain-d-alet-q110814412.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
