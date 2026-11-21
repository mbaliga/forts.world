# La Tour de Vinde

> Jersey · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `la-tour-de-vinde-q16931763` |
| Coordinates | 49.16527, -2.16804 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.16527/-2.16804)) |
| Wikidata | [Q16931763](https://www.wikidata.org/wiki/Q16931763) (CC0) |
| Wikidata class | fortification |
| Types | lighthouse\|Martello tower |
| Administrative area | Saint Brelade |
| Inception | 1915 |
| Wikipedia language editions | 3 |
| OSM `historic` | martello_tower |

## What the model contains

Tier **T1**, status `outline-only`, 14 elements (outline 1, road 4, building 4, zone 2, coastline 2, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/177650031 historic=martello_tower Q16931763 7 m from ledger point
- island ring (1196 m2) cut out of sea-0
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":324,"medianInside":0,"medianOutside":16.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.16527/-2.16804) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; lighthouse\|Martello tower; sitelinks=3; wikidata:Q16931763 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 14 elements); data/traces/la-tour-de-vinde-q16931763.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 14 elements; outline osm:way/177650031 historic=martello_tower Q16931763 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/jersey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
