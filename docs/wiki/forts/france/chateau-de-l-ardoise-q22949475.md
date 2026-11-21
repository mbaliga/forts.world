# Château de l'Ardoise

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-l-ardoise-q22949475` |
| Coordinates | 48.17217, 2.25775 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.17217/2.25775)) |
| Wikidata | [Q22949475](https://www.wikidata.org/wiki/Q22949475) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Pithiviers |
| Inception | C16 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 276 elements (outline 1, road 134, waterway 1, building 571, water 3, zone 10, wall 7).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 5, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/69171845 historic=castle Q22949475 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 571 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.17217/2.25775) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=1; wikidata:Q22949475 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 276 elements); data/traces/chateau-de-l-ardoise-q22949475.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
