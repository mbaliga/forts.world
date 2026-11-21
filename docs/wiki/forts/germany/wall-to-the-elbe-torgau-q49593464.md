# Wall to the Elbe Torgau

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wall-to-the-elbe-torgau-q49593464` |
| Coordinates | 51.55989, 13.00946 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.55989/13.00946)) |
| Wikidata | [Q49593464](https://www.wikidata.org/wiki/Q49593464) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage ensemble\|city walls |
| Administrative area | Torgau |
| Inception | 1811 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `description` | Anlage mit vier unregelmäßig um einen Hof angelegten Gebäudeflügeln und Schlossgraben |
| OSM `website` | https://www.schloss-hartenfels.de |

## What the model contains

Tier **T1**, status `location-only`, 354 elements (marker 12, road 167, building 158, wall 60, retaining-wall 6, zone 3, waterway 3).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 12, inferred 0, unknown 174.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6101661 historic=castle Q2241454 106 m from ledger point
- site is a site relation of 9 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (137 x 123 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 158 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 167 mapped (trace size budget); minor lanes are not drawn
- origin moved 121 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.55989/13.00946) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage ensemble\|city walls; sitelinks=1; wikidata:Q49593464 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 354 elements); data/traces/wall-to-the-elbe-torgau-q49593464.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
