# Hobart coastal defences

> Australia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hobart-coastal-defences-q5874783` |
| Coordinates | -42.8925, 147.33417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-42.8925/147.33417)) |
| Wikidata | [Q5874783](https://www.wikidata.org/wiki/Q5874783) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Tasmania |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 160 elements (outline 1, marker 1, road 91, coastline 1, building 65, water 1).

Evidence: documented 0, mapped 160, inferred 0, derived 1; heights documented 29, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/326661242 historic=yes 650 m from ledger point
- origin moved 651 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":137,"medianInside":1.4,"medianOutside":12.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-42.8925/147.33417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=1; wikidata:Q5874783 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 160 elements); data/traces/hobart-coastal-defences-q5874783.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
