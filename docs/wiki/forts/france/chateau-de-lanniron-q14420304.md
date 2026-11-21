# Château de Lanniron

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-lanniron-q14420304` |
| Coordinates | 47.97607, -4.11065 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.97607/-4.11065)) |
| Wikidata | [Q14420304](https://www.wikidata.org/wiki/Q14420304) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Quimper |
| Inception | C15 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 3 |
| OSM `website` | http://jardins.lanniron.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 53 elements (outline 1, waterway 1, building 10, water 3, road 28, zone 3, wall 5, coastline 2).

Evidence: documented 0, mapped 53, inferred 0, derived 1; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/94291478 historic=castle Q14420304 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":116,"medianInside":0,"medianOutside":15.4}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.97607/-4.11065) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=3; wikidata:Q14420304 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 53 elements); data/traces/chateau-de-lanniron-q14420304.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
