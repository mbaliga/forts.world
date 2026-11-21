# Château de Domeyrat

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-domeyrat-q2969143` |
| Coordinates | 45.25139, 3.50139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.25139/3.50139)) |
| Wikidata | [Q2969143](https://www.wikidata.org/wiki/Q2969143) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Domeyrat |
| Designations | classified historical monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `barrier` | wall |
| OSM `website` | https://chateaudomeyrat.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 130 elements (outline 1, zone 12, waterway 1, road 24, building 91).

Evidence: documented 0, mapped 130, inferred 0, derived 0; heights documented 0, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/292331359 historic=castle Q2969143 25 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.25139/3.50139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q2969143 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 130 elements); data/traces/chateau-de-domeyrat-q2969143.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
