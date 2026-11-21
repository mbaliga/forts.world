# Búnquer d'Ocata

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunquer-d-ocata-q132259467` |
| Coordinates | 41.47958, 2.3225 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.47958/2.3225)) |
| Wikidata | [Q132259467](https://www.wikidata.org/wiki/Q132259467) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | El Masnou |
| Inception | 1936 |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `description` | Bé d'Interès Local, catalogat al BCIL: 3613-I Inventari del Patrimoni arquitectònic de Catalunya: https://invarquit.cultura.gencat.cat/card/8627 |
| OSM `website` | https://invarquit.cultura.gencat.cat/card/8627 |

## What the model contains

Tier **T1**, status `outline-only`, 209 elements (outline 1, marker 5, coastline 2, road 153, building 43, zone 1, waterway 2, water 2).

Evidence: documented 0, mapped 209, inferred 0, derived 2; heights documented 35, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1140262198 historic=building Q17595709 331 m from ledger point
- origin moved 329 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":6,"medianInside":0.9,"medianOutside":11.1}
- sea-1: DEM check ok {"cells":8,"medianInside":0,"medianOutside":11.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.47958/2.3225) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q132259467 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 209 elements); data/traces/bunquer-d-ocata-q132259467.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
