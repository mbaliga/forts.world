# Búnquer de la riera d'Alella

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunquer-de-la-riera-d-alella-q132254318` |
| Coordinates | 41.47615, 2.30779 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.47615/2.30779)) |
| Wikidata | [Q132254318](https://www.wikidata.org/wiki/Q132254318) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | El Masnou |
| Inception | 1936 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `description` | Inventari del Patrimoni arquitectònic de Catalunya: https://invarquit.cultura.gencat.cat/card/8586 |
| OSM `website` | https://invarquit.cultura.gencat.cat/card/8586 |

## What the model contains

Tier **T1**, status `outline-only`, 147 elements (outline 1, marker 1, coastline 2, road 113, building 26, zone 1, water 3).

Evidence: documented 0, mapped 147, inferred 0, derived 3; heights documented 19, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1138874256 historic=yes Q28333433 299 m from ledger point
- origin moved 299 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":31,"medianInside":0.1,"medianOutside":15.8}
- sea-1: DEM check ok {"cells":33,"medianInside":0,"medianOutside":15.9}
- sea-2: DEM check ok {"cells":2,"medianInside":-0.5,"medianOutside":14.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.47615/2.30779) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q132254318 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 147 elements); data/traces/bunquer-de-la-riera-d-alella-q132254318.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
