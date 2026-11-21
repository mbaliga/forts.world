# Hackness Martello Tower and Battery

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hackness-martello-tower-and-battery-q5469237` |
| Coordinates | 58.80548, -3.14884 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.80548/-3.14884)) |
| Wikidata | [Q5469237](https://www.wikidata.org/wiki/Q5469237) (CC0) |
| Wikidata class | fortification |
| Types | barracks\|Martello tower\|military museum |
| Administrative area | Orkney Islands |
| Inception | 1815 |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |
| OSM `historic` | martello_tower |

## What the model contains

Tier **T1**, status `outline+walls`, 37 elements (outline 1, road 12, wall 6, building 8, coastline 1, zone 8, water 1).

Evidence: documented 0, mapped 37, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/118107631 historic=martello_tower Q5469237 208 m from ledger point
- origin moved 208 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":48,"medianInside":2.8,"medianOutside":10.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.80548/-3.14884) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; barracks\|Martello tower\|military museum; sitelinks=4; wikidata:Q5469237 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 21 elements); data/traces/hackness-martello-tower-and-battery-q5469237.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 37 elements; outline osm:way/118107631 historic=martello_tower Q5469237 208 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
