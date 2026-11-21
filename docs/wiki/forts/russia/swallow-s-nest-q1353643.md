# Swallow's Nest

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `swallow-s-nest-q1353643` |
| Coordinates | 44.43057, 34.12851 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.43057/34.12851)) |
| Wikidata | [Q1353643](https://www.wikidata.org/wiki/Q1353643) (CC0) |
| Wikidata class | castle |
| Types | castle\|folly\|architectural landmark |
| Administrative area | Gaspra |
| Inception | 1912 |
| Designations | architectural monument of national significance of Ukraine\|federal cultural heritage site in Russia\|State Register of Immovable Monuments of Ukraine\|cultural heritage site in Russia |
| Wikipedia language editions | 39 |
| OSM `website` | http://www.lastochka.com.ua |

## What the model contains

Tier **T1**, status `outline-only`, 31 elements (outline 1, coastline 3, road 11, cliff 3, building 11, retaining-wall 1, water 1).

Evidence: documented 0, mapped 31, inferred 0, derived 1; heights documented 5, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103635688 historic=(none; chosen by its Wikidata id) Q1353643 12 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":252,"medianInside":2.2,"medianOutside":22.7}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.43057/34.12851) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|folly\|architectural landmark; sitelinks=39; wikidata:Q1353643 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 30 elements); data/traces/swallow-s-nest-q1353643.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 31 elements; outline osm:way/103635688 historic=(none; chosen by its Wikidata id) Q1353643 12 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
