# Citadelle du Château d'Oléron

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadelle-du-chateau-d-oleron-q2974402` |
| Coordinates | 45.8858, -1.19472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.8858/-1.19472)) |
| Wikidata | [Q2974402](https://www.wikidata.org/wiki/Q2974402) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Le Château-d'Oléron |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 3, road 111, water 5, zone 20, wall 6, waterway 4, building 180, coastline 1, retaining-wall 5).

Evidence: documented 0, mapped 337, inferred 0, derived 1; heights documented 3, inferred 0, unknown 189.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/56951598 historic=citywalls 438 m from ledger point
- origin moved 442 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":540,"medianInside":0,"medianOutside":5.7}
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.8858/-1.19472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=3; wikidata:Q2974402 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/citadelle-du-chateau-d-oleron-q2974402.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
