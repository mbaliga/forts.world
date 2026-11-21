# Fort Nieuw-Amsterdam

> Suriname · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-nieuw-amsterdam-q2476520` |
| Coordinates | 5.88806, -55.09167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/5.88806/-55.09167)) |
| Wikidata | [Q2476520](https://www.wikidata.org/wiki/Q2476520) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Commewijne District |
| Designations | cultural heritage monument in Suriname |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 254 elements (outline 1, road 48, waterway 16, water 2, building 173, wall 1, zone 13).

Evidence: documented 0, mapped 254, inferred 0, derived 0; heights documented 0, inferred 0, unknown 174.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135643181 historic=fort Q2476520 23 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/5.88806/-55.09167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=7; wikidata:Q2476520 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 254 elements); data/traces/fort-nieuw-amsterdam-q2476520.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/suriname.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
