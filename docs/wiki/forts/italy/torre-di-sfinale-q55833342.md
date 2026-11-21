# Torre di Sfinale

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-di-sfinale-q55833342` |
| Coordinates | 41.93726, 16.09217 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.93726/16.09217)) |
| Wikidata | [Q55833342](https://www.wikidata.org/wiki/Q55833342) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Peschici |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 14 elements (outline 1, coastline 1, road 4, building 7, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/406877978 historic=(none; chosen by its Wikidata id) Q55833342 49 m from ledger point
- origin moved 48 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":269,"medianInside":0,"medianOutside":0.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.93726/16.09217) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=2; wikidata:Q55833342 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 12 elements); data/traces/torre-di-sfinale-q55833342.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 14 elements; outline osm:way/406877978 historic=(none; chosen by its Wikidata id) Q55833342 49 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
