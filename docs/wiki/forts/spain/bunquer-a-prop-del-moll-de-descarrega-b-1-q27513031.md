# Búnquer a prop del moll de Descàrrega - B-1

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunquer-a-prop-del-moll-de-descarrega-b-1-q27513031` |
| Coordinates | 41.48671, 2.35228 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.48671/2.35228)) |
| Wikidata | [Q27513031](https://www.wikidata.org/wiki/Q27513031) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Premià de Mar |
| Designations | Cultural Asset of Local Interest |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `description` | Bé Cultural d'Interès Local, BCIL protegit el número de registre BCIL 91089-I. Registrat a l'Inventari del Patrimoni Arquitectònic de Catalunya https://invarquit.cultura.gencat.cat/card/8890 |

## What the model contains

Tier **T1**, status `outline+walls`, 241 elements (outline 1, road 114, building 485, coastline 3, wall 1, water 2).

Evidence: documented 0, mapped 241, inferred 0, derived 2; heights documented 4, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/45010890 historic=yes Q65206556 219 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 485 mapped (trace size budget); the rest of the town is not drawn
- origin moved 218 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":8,"medianInside":4.4,"medianOutside":12.9}
- sea-1: DEM check ok {"cells":10,"medianInside":2.7,"medianOutside":12.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.48671/2.35228) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q27513031 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 241 elements); data/traces/bunquer-a-prop-del-moll-de-descarrega-b-1-q27513031.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
