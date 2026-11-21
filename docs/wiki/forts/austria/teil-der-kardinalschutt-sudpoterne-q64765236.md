# Teil der Kardinalschütt, Südpoterne

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `teil-der-kardinalschutt-sudpoterne-q64765236` |
| Coordinates | 46.62389, 14.31263 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.62389/14.31263)) |
| Wikidata | [Q64765236](https://www.wikidata.org/wiki/Q64765236) (CC0) |
| Wikidata class | fort |
| Types | city fortifications |
| Administrative area | Klagenfurt am Wörthersee |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 0 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 10, road 170, building 279, wall 4, zone 2).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 14, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/718454842 historic=monument 53 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 279 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 170 mapped (trace size budget); minor lanes are not drawn
- origin moved 53 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.62389/14.31263) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city fortifications; sitelinks=0; wikidata:Q64765236 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/teil-der-kardinalschutt-sudpoterne-q64765236.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
