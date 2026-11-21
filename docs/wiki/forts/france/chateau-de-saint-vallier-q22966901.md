# Château de Saint-Vallier

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-saint-vallier-q22966901` |
| Coordinates | 45.17929, 4.8171 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.17929/4.8171)) |
| Wikidata | [Q22966901](https://www.wikidata.org/wiki/Q22966901) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Saint-Vallier |
| Inception | C12 |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `description` | Built 15th Century. Birthplace of Diane de Poitier (1499 –1566), Countess of Saint-Vallier, influential mistress of King Henry II of France. |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 1, road 150, building 276, waterway 2, zone 16, wall 7, water 3, retaining-wall 2).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 4, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1326639 historic=castle Q22966901 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 276 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.17929/4.8171) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=1; wikidata:Q22966901 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/chateau-de-saint-vallier-q22966901.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
