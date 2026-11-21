# Fort VIIA

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-viia-q1412947` |
| Coordinates | 52.17292, 21.01569 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.17292/21.01569)) |
| Wikidata | [Q1412947](https://www.wikidata.org/wiki/Q1412947) (CC0) |
| Wikidata class | fort |
| Types | architectural heritage monument\|fort |
| Administrative area | Mokotów |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 393 elements (outline 1, road 568, building 205, zone 121, retaining-wall 1).

Evidence: documented 0, mapped 393, inferred 0, derived 0; heights documented 106, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/801639018 historic=fort Q1412947 44 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 205 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 568 mapped (trace size budget); minor lanes are not drawn
- origin moved 33 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.17292/21.01569) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; architectural heritage monument\|fort; sitelinks=3; wikidata:Q1412947 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 393 elements); data/traces/fort-viia-q1412947.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
