# Fort Querqueville

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-querqueville-q113666415` |
| Coordinates | 49.67167, -1.68161 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.67167/-1.68161)) |
| Wikidata | [Q113666415](https://www.wikidata.org/wiki/Q113666415) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Cherbourg-en-Cotentin |
| Designations | monument historique inscrit\|classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 51 elements (outline 1, water 3, road 14, building 16, coastline 4, zone 4, retaining-wall 9).

Evidence: documented 0, mapped 51, inferred 0, derived 2; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/264346680 historic=fort 23 m from ledger point
- origin moved 19 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":5,"medianInside":0,"medianOutside":0.4}
- sea-1: DEM check ok {"cells":231,"medianInside":0,"medianOutside":3.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.67167/-1.68161) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q113666415 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 51 elements); data/traces/fort-querqueville-q113666415.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
