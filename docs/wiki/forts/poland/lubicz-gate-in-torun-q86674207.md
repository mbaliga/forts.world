# Lubicz Gate in Torun

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lubicz-gate-in-torun-q86674207` |
| Coordinates | 53.01556, 18.61806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.01556/18.61806)) |
| Wikidata | [Q86674207](https://www.wikidata.org/wiki/Q86674207) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Toruń |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 400 elements (outline 1, marker 1, road 401, zone 113, building 179, retaining-wall 14, wall 1).

Evidence: documented 0, mapped 400, inferred 0, derived 0; heights documented 15, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/260849271 historic=building 237 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 179 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 401 mapped (trace size budget); minor lanes are not drawn
- origin moved 237 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.01556/18.61806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q86674207 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 400 elements); data/traces/lubicz-gate-in-torun-q86674207.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
