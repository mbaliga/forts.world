# Château de Gontaud-de-Nogaret

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-gontaud-de-nogaret-q20156301` |
| Coordinates | 44.45622, 0.29581 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.45622/0.29581)) |
| Wikidata | [Q20156301](https://www.wikidata.org/wiki/Q20156301) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Gontaud-de-Nogaret |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 184 elements (outline 1, marker 2, road 53, building 404, zone 3, waterway 3, wall 2).

Evidence: documented 0, mapped 184, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8758876 historic=castle Q20156301 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 404 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.45622/0.29581) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q20156301 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 184 elements); data/traces/chateau-de-gontaud-de-nogaret-q20156301.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
