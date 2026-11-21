# Keep of the Baku Fortress

> Azerbaijan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `keep-of-the-baku-fortress-q131351538` |
| Coordinates | 40.36791, 49.83429 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.36791/49.83429)) |
| Wikidata | [Q131351538](https://www.wikidata.org/wiki/Q131351538) (CC0) |
| Wikidata class | fortification |
| Types | keep |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `website` | https://guide.icherisheher.az/ru |

## What the model contains

Tier **T1**, status `outline+walls`, 398 elements (outline 1, marker 2, road 159, building 221, zone 8, water 5, wall 1, retaining-wall 1).

Evidence: documented 0, mapped 398, inferred 0, derived 0; heights documented 44, inferred 0, unknown 179.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/299450008 historic=castle Q338889 219 m from ledger point
- origin moved 221 m from the ledger point to the centre of the mapped site
- 328 DEM cells below -3 m (bathymetry) clamped to -3 m
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.36791/49.83429) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; keep; sitelinks=1; wikidata:Q131351538 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 398 elements); data/traces/keep-of-the-baku-fortress-q131351538.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/azerbaijan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
