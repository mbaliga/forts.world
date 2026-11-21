# Hexenturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hexenturm-q41271385` |
| Coordinates | 47.8784, 10.61816 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.8784/10.61816)) |
| Wikidata | [Q41271385](https://www.wikidata.org/wiki/Q41271385) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Kaufbeuren |
| Inception | 1420 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `description` | The house, which has stepped gables and bay windows, was part of a building complex belonging to the monks of the Irse convent and served as their place of refuge during wartime. |

## What the model contains

Tier **T1**, status `outline+walls`, 272 elements (outline 1, marker 14, road 123, zone 11, building 354, wall 2, waterway 1).

Evidence: documented 0, mapped 272, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/88493713 historic=building 112 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 354 mapped (trace size budget); the rest of the town is not drawn
- origin moved 111 m from the ledger point to the centre of the mapped site
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.8784/10.61816) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q41271385 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 272 elements); data/traces/hexenturm-q41271385.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
