# Al Alam Palace

> Oman · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `al-alam-palace-q2121461` |
| Coordinates | 23.6163, 58.59483 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.6163/58.59483)) |
| Wikidata | [Q2121461](https://www.wikidata.org/wiki/Q2121461) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|royal palace |
| Administrative area | Muscat Governorate |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 154 elements (outline 1, coastline 3, road 77, building 57, wall 8, zone 5, water 2).

Evidence: documented 0, mapped 154, inferred 0, derived 1; heights documented 0, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/66647557 historic=castle Q2121461 14 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":236,"medianInside":2.1,"medianOutside":9.3}
- 82 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.6163/58.59483) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|royal palace; sitelinks=15; wikidata:Q2121461 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 154 elements); data/traces/al-alam-palace-q2121461.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/oman.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
