# Château de Beaucaire

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-beaucaire-q5118736` |
| Coordinates | 43.81, 4.645 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.81/4.645)) |
| Wikidata | [Q5118736](https://www.wikidata.org/wiki/Q5118736) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Beaucaire |
| Designations | classified historical monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://www.provence-camargue-tourisme.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 348 elements (outline 1, marker 4, road 201, building 840, waterway 2, wall 20, retaining-wall 15, cliff 8, zone 28).

Evidence: documented 0, mapped 348, inferred 0, derived 0; heights documented 4, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/997548344 historic=castle Q5118736 58 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 840 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 201 mapped (trace size budget); minor lanes are not drawn
- origin moved 59 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.81/4.645) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q5118736 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 348 elements); data/traces/chateau-de-beaucaire-q5118736.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
