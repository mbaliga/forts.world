# Torre del Campese

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-campese-q3995403` |
| Coordinates | 42.36902, 10.88075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.36902/10.88075)) |
| Wikidata | [Q3995403](https://www.wikidata.org/wiki/Q3995403) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Giglio |
| Wikipedia language editions | 4 |
| OSM `website` | https://www.torredelcampese.it/ |

## What the model contains

Tier **T1**, status `outline-only`, 167 elements (outline 1, road 17, waterway 4, coastline 5, building 137, zone 2, water 1).

Evidence: documented 0, mapped 167, inferred 0, derived 1; heights documented 137, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/715890230 historic=(none; chosen by its Wikidata id) Q3995403 0 m from ledger point
- island ring (5984 m2) cut out of sea-0
- sea-0: DEM check ok {"cells":249,"medianInside":0,"medianOutside":7.8}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.36902/10.88075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=4; wikidata:Q3995403 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 167 elements); data/traces/torre-del-campese-q3995403.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 167 elements; outline osm:way/715890230 historic=(none; chosen by its Wikidata id) Q3995403 0 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
