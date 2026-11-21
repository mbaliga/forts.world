# Fort Concordia

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-concordia-q10283788` |
| Coordinates | -10.16277, 123.57477 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-10.16277/123.57477)) |
| Wikidata | [Q10283788](https://www.wikidata.org/wiki/Q10283788) (CC0) |
| Wikidata class | fort |
| Types | fortification\|fort |
| Administrative area | Kota Raja |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 164 elements (outline 1, road 38, coastline 1, building 436, zone 1, waterway 1, wall 1, water 1).

Evidence: documented 0, mapped 164, inferred 0, derived 1; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/181977115 historic=building 337 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 436 mapped (trace size budget); the rest of the town is not drawn
- origin moved 337 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":9.3,"medianOutside":12.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-10.16277/123.57477) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|fort; sitelinks=2; wikidata:Q10283788 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 164 elements); data/traces/fort-concordia-q10283788.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
