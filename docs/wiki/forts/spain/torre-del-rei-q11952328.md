# Torre del Rei

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-rei-q11952328` |
| Coordinates | 40.08283, 0.14581 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.08283/0.14581)) |
| Wikidata | [Q11952328](https://www.wikidata.org/wiki/Q11952328) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Oropesa |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 25 elements (outline 1, road 16, coastline 1, building 6, water 1).

Evidence: documented 0, mapped 25, inferred 0, derived 1; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/38710335 historic=castle Q11952328 7 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":143,"medianInside":0,"medianOutside":11.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.08283/0.14581) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=3; wikidata:Q11952328 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 25 elements); data/traces/torre-del-rei-q11952328.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
