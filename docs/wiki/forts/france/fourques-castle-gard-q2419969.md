# Fourques castle (Gard)

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fourques-castle-gard-q2419969` |
| Coordinates | 43.69428, 4.61212 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.69428/4.61212)) |
| Wikidata | [Q2419969](https://www.wikidata.org/wiki/Q2419969) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Fourques |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 192 elements (outline 1, marker 4, road 53, waterway 1, zone 11, building 335, wall 2).

Evidence: documented 0, mapped 192, inferred 0, derived 0; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4023166 historic=castle Q2419969 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 335 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.69428/4.61212) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q2419969 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 192 elements); data/traces/fourques-castle-gard-q2419969.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
