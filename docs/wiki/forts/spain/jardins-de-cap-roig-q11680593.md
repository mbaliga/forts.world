# Jardíns de Cap Roig

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jardins-de-cap-roig-q11680593` |
| Coordinates | 41.87729, 3.17747 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.87729/3.17747)) |
| Wikidata | [Q11680593](https://www.wikidata.org/wiki/Q11680593) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Calella de Palafrugell |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 69 elements (outline 1, road 41, coastline 12, zone 1, building 11, cliff 1, water 2).

Evidence: documented 0, mapped 69, inferred 0, derived 2; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2760142 historic=castle Q11680593 5 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":0.3,"medianOutside":73.3}
- sea-1: DEM check ok {"cells":40,"medianInside":0,"medianOutside":77.1}
- 49 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.87729/3.17747) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q11680593 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 69 elements); data/traces/jardins-de-cap-roig-q11680593.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
