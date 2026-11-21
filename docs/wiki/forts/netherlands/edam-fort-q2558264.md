# Edam Fort

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `edam-fort-q2558264` |
| Coordinates | 52.51798, 5.06747 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.51798/5.06747)) |
| Wikidata | [Q2558264](https://www.wikidata.org/wiki/Q2558264) (CC0) |
| Wikidata class | fort |
| Types | fort\|fort |
| Administrative area | Edam-Volendam |
| Designations | Provincial monument |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `website` | https://www.stelling-amsterdam.nl/forten/edam/index.php |

## What the model contains

Tier **T1**, status `outline-only`, 304 elements (outline 1, marker 2, road 95, water 26, zone 29, waterway 5, building 143, retaining-wall 3).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 3, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/951465646 historic=fort Q2558264 4 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- 312 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.51798/5.06747) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fort; sitelinks=3; wikidata:Q2558264 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 304 elements); data/traces/edam-fort-q2558264.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
