# Fort Beneden-Lent

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-beneden-lent-q2225118` |
| Coordinates | 51.86208, 5.85216 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.86208/5.85216)) |
| Wikidata | [Q2225118](https://www.wikidata.org/wiki/Q2225118) (CC0) |
| Wikidata class | fort |
| Types | fort\|fort |
| Administrative area | Nijmegen |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 250 elements (outline 1, road 107, water 5, zone 8, building 434, waterway 9).

Evidence: documented 0, mapped 250, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/609411108 historic=fort Q2225118 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 434 mapped (trace size budget); the rest of the town is not drawn
- origin moved 16 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.86208/5.85216) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fort; sitelinks=2; wikidata:Q2225118 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 250 elements); data/traces/fort-beneden-lent-q2225118.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
