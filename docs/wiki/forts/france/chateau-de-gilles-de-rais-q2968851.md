# Château de Gilles de Rais

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-gilles-de-rais-q2968851` |
| Coordinates | 47.41246, -0.86121 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.41246/-0.86121)) |
| Wikidata | [Q2968851](https://www.wikidata.org/wiki/Q2968851) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|yes\|château |
| Administrative area | Champtocé-sur-Loire |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |
| OSM `description` | château d'origine médiévale |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 346 elements (outline 1, road 51, building 283, water 2, waterway 3, zone 5).

Evidence: documented 0, mapped 346, inferred 0, derived 0; heights documented 1, inferred 0, unknown 283.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/132844249 historic=castle Q2968851 6 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.41246/-0.86121) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|yes\|château; sitelinks=2; wikidata:Q2968851 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 346 elements); data/traces/chateau-de-gilles-de-rais-q2968851.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
