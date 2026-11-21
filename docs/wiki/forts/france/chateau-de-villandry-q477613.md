# Château de Villandry

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-villandry-q477613` |
| Coordinates | 47.34056, 0.51437 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.34056/0.51437)) |
| Wikidata | [Q477613](https://www.wikidata.org/wiki/Q477613) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Villandry |
| Inception | C14 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 31 |
| OSM `historic` | castle |
| OSM `website` | https://www.chateauvillandry.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 2, road 144, water 7, wall 10, waterway 11, zone 151, building 87, retaining-wall 30).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 4, inferred 0, unknown 59.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/75445880 historic=castle Q477613 5 m from ledger point
- pruned to the outline plus 150 m: 443 -> 320 elements
- roads capped: kept the 80 longest of 113 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.34056/0.51437) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=31; wikidata:Q477613 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/chateau-de-villandry-q477613.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
