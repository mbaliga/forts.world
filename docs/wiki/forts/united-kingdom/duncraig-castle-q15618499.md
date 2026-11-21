# Duncraig Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `duncraig-castle-q15618499` |
| Coordinates | 57.33803, -5.63353 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.33803/-5.63353)) |
| Wikidata | [Q15618499](https://www.wikidata.org/wiki/Q15618499) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Highland |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.duncraigcastle.co.uk/ |

## What the model contains

Tier **T1**, status `outline-only`, 21 elements (outline 1, coastline 3, road 9, building 6, water 2).

Evidence: documented 0, mapped 21, inferred 0, derived 2; heights documented 1, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/266638801 historic=castle Q15618499 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":99,"medianInside":57,"medianOutside":21.8}
- sea-1: DEM check failed {"cells":5,"medianInside":11.1,"medianOutside":23.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.33803/-5.63353) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q15618499 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 21 elements); data/traces/duncraig-castle-q15618499.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
