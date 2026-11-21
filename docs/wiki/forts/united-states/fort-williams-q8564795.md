# Fort Williams

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-williams-q8564795` |
| Coordinates | 43.6233, -70.2111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.6233/-70.2111)) |
| Wikidata | [Q8564795](https://www.wikidata.org/wiki/Q8564795) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Cape Elizabeth |
| Inception | 1898 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, marker 2, road 53, coastline 2, water 1, zone 1, building 7, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/660590090 historic=yes 162 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 162 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.6233/-70.2111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q8564795 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 70 elements); data/traces/fort-williams-q8564795.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
