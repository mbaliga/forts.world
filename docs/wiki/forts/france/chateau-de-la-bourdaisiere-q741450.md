# Château de la Bourdaisière

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-la-bourdaisiere-q741450` |
| Coordinates | 47.36988, 0.83825 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.36988/0.83825)) |
| Wikidata | [Q741450](https://www.wikidata.org/wiki/Q741450) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Montlouis-sur-Loire |
| Designations | monument historique inscrit |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |
| OSM `website` | https://www.labourdaisiere.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 179 elements (outline 1, road 52, building 65, wall 13, water 3, zone 34, cliff 9, retaining-wall 2).

Evidence: documented 0, mapped 179, inferred 0, derived 0; heights documented 0, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2266591 historic=castle Q741450 7 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.36988/0.83825) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=9; wikidata:Q741450 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 179 elements); data/traces/chateau-de-la-bourdaisiere-q741450.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
