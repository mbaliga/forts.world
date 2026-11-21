# Château d'Athis

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-athis-q2968144` |
| Coordinates | 48.70868, 2.39058 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.70868/2.39058)) |
| Wikidata | [Q2968144](https://www.wikidata.org/wiki/Q2968144) (CC0) |
| Wikidata class | castle |
| Types | castle\|castle\|château |
| Administrative area | Athis-Mons |
| Inception | C17 |
| Designations | listed in the general inventory of cultural heritage\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 5, road 242, zone 50, building 143, retaining-wall 6, water 4, wall 19).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 33, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/70235080 historic=castle Q2968144 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 143 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 242 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.70868/2.39058) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|castle\|château; sitelinks=2; wikidata:Q2968144 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/chateau-d-athis-q2968144.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
