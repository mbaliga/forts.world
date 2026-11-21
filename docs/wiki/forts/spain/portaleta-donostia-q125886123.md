# Portaleta (Donostia)

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portaleta-donostia-q125886123` |
| Coordinates | 43.32305, -1.9873 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.32305/-1.9873)) |
| Wikidata | [Q125886123](https://www.wikidata.org/wiki/Q125886123) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | San Sebastián |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 225 elements (outline 1, marker 7, road 126, building 49, wall 13, coastline 2, retaining-wall 13, zone 11, water 3).

Evidence: documented 0, mapped 225, inferred 0, derived 2; heights documented 11, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28156564 historic=castle Q12268644 251 m from ledger point
- origin moved 251 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":44.5}
- sea-1: DEM check failed {"cells":6,"medianInside":23.5,"medianOutside":45.3}
- 24 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.32305/-1.9873) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q125886123 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 225 elements); data/traces/portaleta-donostia-q125886123.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
