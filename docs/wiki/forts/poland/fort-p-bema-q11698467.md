# Fort P Bema

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-p-bema-q11698467` |
| Coordinates | 52.2564, 20.9389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2564/20.9389)) |
| Wikidata | [Q11698467](https://www.wikidata.org/wiki/Q11698467) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Warsaw |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `website` | https://eko.um.warszawa.pl/-/fort-bema |

## What the model contains

Tier **T1**, status `outline-only`, 303 elements (outline 1, marker 3, road 317, waterway 2, building 96, zone 48, water 1, retaining-wall 2).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 72, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72490185 historic=fort Q11698467 27 m from ledger point
- roads capped: kept the 150 longest of 317 mapped (trace size budget); minor lanes are not drawn
- origin moved 26 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2564/20.9389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q11698467 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 303 elements); data/traces/fort-p-bema-q11698467.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
