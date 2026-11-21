# Ham Fort

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ham-fort-q1888721` |
| Coordinates | 52.50183, 4.73604 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.50183/4.73604)) |
| Wikidata | [Q1888721](https://www.wikidata.org/wiki/Q1888721) (CC0) |
| Wikidata class | fort |
| Types | fort\|fort |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `website` | https://www.stelling-amsterdam.nl/forten/ham |

## What the model contains

Tier **T1**, status `outline-only`, 188 elements (outline 1, road 31, water 47, zone 36, building 47, retaining-wall 3, waterway 23).

Evidence: documented 0, mapped 188, inferred 0, derived 0; heights documented 0, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/951750297 historic=fort Q1888721 42 m from ledger point
- origin moved 27 m from the ledger point to the centre of the mapped site
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.50183/4.73604) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fort; sitelinks=3; wikidata:Q1888721 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 188 elements); data/traces/ham-fort-q1888721.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
