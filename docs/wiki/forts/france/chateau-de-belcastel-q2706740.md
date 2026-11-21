# Château de Belcastel

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-belcastel-q2706740` |
| Coordinates | 44.38889, 2.33611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.38889/2.33611)) |
| Wikidata | [Q2706740](https://www.wikidata.org/wiki/Q2706740) (CC0) |
| Wikidata class | castle |
| Types | castle\|art museum |
| Administrative area | Belcastel |
| Designations | monument historique inscrit |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, marker 5, waterway 9, road 125, zone 7, building 100, cliff 2, retaining-wall 25, wall 13, water 7).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 34, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/312417109 historic=castle Q2706740 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.38889/2.33611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|art museum; sitelinks=10; wikidata:Q2706740 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/chateau-de-belcastel-q2706740.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
