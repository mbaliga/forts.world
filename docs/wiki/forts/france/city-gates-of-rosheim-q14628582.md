# City gates of Rosheim

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-gates-of-rosheim-q14628582` |
| Coordinates | 48.4966, 7.47125 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.4966/7.47125)) |
| Wikidata | [Q14628582](https://www.wikidata.org/wiki/Q14628582) (CC0) |
| Wikidata class | fort |
| Types | compound (fortification) |
| Administrative area | Rosheim |
| Inception | 1267 |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 204 elements (outline 1, road 71, building 616, waterway 3, wall 7, zone 1).

Evidence: documented 0, mapped 204, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/70034951 historic=citywalls 200 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 616 mapped (trace size budget); the rest of the town is not drawn
- origin moved 200 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.4966/7.47125) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; compound (fortification); sitelinks=2; wikidata:Q14628582 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 204 elements); data/traces/city-gates-of-rosheim-q14628582.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
