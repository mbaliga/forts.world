# Porta da Mare

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-da-mare-q140620971` |
| Coordinates | 42.94991, 13.87606 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.94991/13.87606)) |
| Wikidata | [Q140620971](https://www.wikidata.org/wiki/Q140620971) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | San Benedetto del Tronto |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 247 elements (outline 1, marker 1, road 104, waterway 2, building 276, zone 10, water 1, wall 8).

Evidence: documented 0, mapped 247, inferred 0, derived 0; heights documented 53, inferred 0, unknown 75.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225436740 historic=fort Q94577208 127 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 276 mapped (trace size budget); the rest of the town is not drawn
- origin moved 126 m from the ledger point to the centre of the mapped site
- 25 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.94991/13.87606) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q140620971 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 247 elements); data/traces/porta-da-mare-q140620971.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
