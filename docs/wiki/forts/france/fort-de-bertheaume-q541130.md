# Fort de Bertheaume

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-bertheaume-q541130` |
| Coordinates | 48.33694, -4.6975 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.33694/-4.6975)) |
| Wikidata | [Q541130](https://www.wikidata.org/wiki/Q541130) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|tidal island\|fort |
| Administrative area | Plougonvelin |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline-only`, 33 elements (outline 1, marker 1, road 12, retaining-wall 10, zone 3, building 4, coastline 1, water 1).

Evidence: documented 0, mapped 33, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/254122174 historic=fort 13 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":320,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.33694/-4.6975) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|tidal island\|fort; sitelinks=7; wikidata:Q541130 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 33 elements); data/traces/fort-de-bertheaume-q541130.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
