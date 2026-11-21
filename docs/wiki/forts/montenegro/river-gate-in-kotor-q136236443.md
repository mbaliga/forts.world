# River Gate in Kotor

> Montenegro · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `river-gate-in-kotor-q136236443` |
| Coordinates | 42.42623, 18.77215 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.42623/18.77215)) |
| Wikidata | [Q136236443](https://www.wikidata.org/wiki/Q136236443) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Kotor Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | The palace Grgurina belonged to the noble family Grgurina. It was built in the eighteenth century in the Baroque style, with the façade on which dominate stone balconies with balustrades |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 5, road 168, building 205, wall 21, water 5, waterway 2, retaining-wall 16, zone 5, coastline 3, cliff 1).

Evidence: documented 0, mapped 329, inferred 0, derived 3; heights documented 26, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/197926373 historic=castle 132 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 205 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 168 mapped (trace size budget); minor lanes are not drawn
- origin moved 132 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":7.3}
- sea-1: DEM check ok {"cells":24,"medianInside":0.4,"medianOutside":7.8}
- sea-2: DEM check ok {"cells":31,"medianInside":0,"medianOutside":7.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.42623/18.77215) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q136236443 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/river-gate-in-kotor-q136236443.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/montenegro.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
