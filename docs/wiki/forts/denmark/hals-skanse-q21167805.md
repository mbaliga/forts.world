# Hals Skanse

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hals-skanse-q21167805` |
| Coordinates | 56.99331, 10.30961 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.99331/10.30961)) |
| Wikidata | [Q21167805](https://www.wikidata.org/wiki/Q21167805) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Aalborg Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 277 elements (outline 1, marker 3, coastline 1, road 88, building 179, zone 1, waterway 2, water 2).

Evidence: documented 0, mapped 277, inferred 0, derived 2; heights documented 0, inferred 0, unknown 179.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/181493749 historic=(none; chosen by its Wikidata id) Q21167805 20 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":16,"medianInside":1,"medianOutside":4.1}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":4.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.99331/10.30961) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=1; wikidata:Q21167805 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 283 elements); data/traces/hals-skanse-q21167805.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 277 elements; outline osm:way/181493749 historic=(none; chosen by its Wikidata id) Q21167805 20 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
