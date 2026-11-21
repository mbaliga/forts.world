# Château de Montdidier

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-montdidier-q19843747` |
| Coordinates | 46.27645, 5.49918 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.27645/5.49918)) |
| Wikidata | [Q19843747](https://www.wikidata.org/wiki/Q19843747) (CC0) |
| Wikidata class | castle |
| Types | castle\|hillfort\|yes\|château |
| Administrative area | Aromas |
| Inception | 1200 |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 24 elements (outline 1, marker 1, wall 1, road 15, zone 4, cliff 1).

Evidence: documented 0, mapped 24, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1550510718 historic=ruins 21 m from ledger point
- origin moved 21 m from the ledger point to the centre of the mapped site
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.27645/5.49918) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|hillfort\|yes\|château; sitelinks=2; wikidata:Q19843747 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 24 elements); data/traces/chateau-de-montdidier-q19843747.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
