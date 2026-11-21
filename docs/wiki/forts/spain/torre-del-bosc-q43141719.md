# Torre del Bosc

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-bosc-q43141719` |
| Coordinates | 39.85081, 2.80207 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.85081/2.80207)) |
| Wikidata | [Q43141719](https://www.wikidata.org/wiki/Q43141719) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Escorca |
| Inception | 1700 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 53 elements (outline 1, road 27, coastline 2, building 15, cliff 4, wall 1, waterway 1, water 2).

Evidence: documented 0, mapped 53, inferred 0, derived 2; heights documented 11, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/151331719 historic=(none; chosen by its Wikidata id) Q43141719 8 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":2,"medianInside":-7.4,"medianOutside":66.3}
- sea-1: DEM check ok {"cells":49,"medianInside":0,"medianOutside":80.5}
- 19 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.85081/2.80207) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q43141719 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 56 elements); data/traces/torre-del-bosc-q43141719.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 53 elements; outline osm:way/151331719 historic=(none; chosen by its Wikidata id) Q43141719 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
