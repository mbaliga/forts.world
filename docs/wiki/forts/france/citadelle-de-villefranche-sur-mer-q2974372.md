# Citadelle de Villefranche-sur-Mer

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadelle-de-villefranche-sur-mer-q2974372` |
| Coordinates | 43.7014, 7.3109 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.7014/7.3109)) |
| Wikidata | [Q2974372](https://www.wikidata.org/wiki/Q2974372) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Villefranche-sur-Mer |
| Designations | classified historical monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 289 elements (outline 1, marker 4, road 141, building 320, coastline 4, wall 10, retaining-wall 6, water 2).

Evidence: documented 0, mapped 289, inferred 0, derived 2; heights documented 79, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10116067 historic=castle Q2974372 25 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 320 mapped (trace size budget); the rest of the town is not drawn
- origin moved 26 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":671,"medianInside":13.7,"medianOutside":0}
- sea-1: DEM check ok {"cells":271,"medianInside":0,"medianOutside":29.7}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.7014/7.3109) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=3; wikidata:Q2974372 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/citadelle-de-villefranche-sur-mer-q2974372.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
