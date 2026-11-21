# Fort Oranje

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-oranje-q1954949` |
| Coordinates | 0.79288, 127.387 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/0.79288/127.387)) |
| Wikidata | [Q1954949](https://www.wikidata.org/wiki/Q1954949) (CC0) |
| Wikidata class | fort |
| Types | fortification\|fort |
| Administrative area | Ternate |
| Inception | 1607 |
| Wikipedia language editions | 7 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, marker 1, road 60, building 667, zone 6, water 4, coastline 1).

Evidence: documented 0, mapped 194, inferred 0, derived 1; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/587887602 historic=(none; chosen by its Wikidata id) Q1954949 25 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 667 mapped (trace size budget); the rest of the town is not drawn
- origin moved 24 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":1,"medianInside":6.5,"medianOutside":8.3}
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/0.79288/127.387) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|fort; sitelinks=7; wikidata:Q1954949 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 341 elements); data/traces/fort-oranje-q1954949.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 194 elements; outline osm:way/587887602 historic=(none; chosen by its Wikidata id) Q1954949 25 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
