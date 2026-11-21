# Steinvikholm Castle

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `steinvikholm-castle-q1974677` |
| Coordinates | 63.54378, 10.81321 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/63.54378/10.81321)) |
| Wikidata | [Q1974677](https://www.wikidata.org/wiki/Q1974677) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural property |
| Administrative area | Stjørdal Municipality |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 23 elements (outline 1, coastline 3, road 7, building 10, water 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/342259032 historic=castle Q1974677 13 m from ledger point
- island ring (19581 m2) cut out of sea-0
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1399,"medianInside":0,"medianOutside":2}
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/63.54378/10.81321) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural property; sitelinks=13; wikidata:Q1974677 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 23 elements); data/traces/steinvikholm-castle-q1974677.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
