# Fort de Rosny

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-rosny-q3078222` |
| Coordinates | 48.87, 2.47444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.87/2.47444)) |
| Wikidata | [Q3078222](https://www.wikidata.org/wiki/Q3078222) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 133 elements (outline 1, road 52, building 60, zone 20).

Evidence: documented 0, mapped 133, inferred 0, derived 0; heights documented 20, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/408891075 historic=yes 621 m from ledger point
- origin moved 621 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.87/2.47444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3078222 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 133 elements); data/traces/fort-de-rosny-q3078222.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
