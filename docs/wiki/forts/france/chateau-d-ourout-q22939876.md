# château d'Ourout

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-ourout-q22939876` |
| Coordinates | 43.00388, -0.10201 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.00388/-0.10201)) |
| Wikidata | [Q22939876](https://www.wikidata.org/wiki/Q22939876) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Argelès-Gazost |
| Inception | C15 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 2, road 117, wall 6, building 323, waterway 16, zone 10, water 1, retaining-wall 11).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 1, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/122305294 historic=castle Q22939876 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 323 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.00388/-0.10201) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=0; wikidata:Q22939876 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/chateau-d-ourout-q22939876.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
