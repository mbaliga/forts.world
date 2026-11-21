# Torre Calarossa

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-calarossa-q3995148` |
| Coordinates | 41.92622, 15.64322 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.92622/15.64322)) |
| Wikidata | [Q3995148](https://www.wikidata.org/wiki/Q3995148) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | San Nicandro Garganico |
| Inception | 1569 |
| Wikipedia language editions | 2 |
| OSM `historic` | tower |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, road 3, coastline 1, building 1, water 1).

Evidence: documented 0, mapped 7, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/405773955 historic=tower Q3995148 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":182,"medianInside":0,"medianOutside":6.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.92622/15.64322) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=2; wikidata:Q3995148 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 7 elements); data/traces/torre-calarossa-q3995148.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 7 elements; outline osm:way/405773955 historic=tower Q3995148 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
