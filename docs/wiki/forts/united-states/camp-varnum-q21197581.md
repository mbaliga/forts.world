# Camp Varnum

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `camp-varnum-q21197581` |
| Coordinates | 41.44639, -71.43333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.44639/-71.43333)) |
| Wikidata | [Q21197581](https://www.wikidata.org/wiki/Q21197581) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Inception | 1942 |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 58 elements (outline 1, road 21, zone 5, coastline 3, building 27, water 1).

Evidence: documented 0, mapped 58, inferred 0, derived 1; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1324120584 historic=(none; chosen by its Wikidata id) Q21197581 89 m from ledger point
- origin moved 89 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":426,"medianInside":0,"medianOutside":4.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.44639/-71.43333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q21197581 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 45 elements); data/traces/camp-varnum-q21197581.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 58 elements; outline osm:way/1324120584 historic=(none; chosen by its Wikidata id) Q21197581 89 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
