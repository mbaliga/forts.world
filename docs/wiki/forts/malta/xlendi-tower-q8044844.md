# Xlendi Tower

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `xlendi-tower-q8044844` |
| Coordinates | 36.0276, 14.2133 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.0276/14.2133)) |
| Wikidata | [Q8044844](https://www.wikidata.org/wiki/Q8044844) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Munxar |
| Inception | 1650 |
| Wikipedia language editions | 7 |
| OSM `heritage` | 2 |
| OSM `description` | Lascaris Tower |

## What the model contains

Tier **T1**, status `outline-only`, 17 elements (outline 1, road 8, coastline 1, water 5, zone 2).

Evidence: documented 0, mapped 17, inferred 0, derived 3; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/222724489 historic=(none; chosen by its Wikidata id) Q8044844 17 m from ledger point
- origin moved 17 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":400,"medianInside":0,"medianOutside":1.9}
- sea-1: DEM check ok {"cells":392,"medianInside":0,"medianOutside":1}
- sea-2: DEM check ok {"cells":287,"medianInside":0,"medianOutside":9.6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.0276/14.2133) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=7; wikidata:Q8044844 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 21 elements); data/traces/xlendi-tower-q8044844.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 17 elements; outline osm:way/222724489 historic=(none; chosen by its Wikidata id) Q8044844 17 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
