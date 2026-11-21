# Torre des Castellar

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-des-castellar-q43142575` |
| Coordinates | 39.98037, 3.83182 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.98037/3.83182)) |
| Wikidata | [Q43142575](https://www.wikidata.org/wiki/Q43142575) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Ciutadella |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | martello_tower |
| OSM `description` | Torre des Castellar También conocida como Torre Santandria Construida por los ingleses en el año 1799 durante la ocupación inglesa de Menorca |

## What the model contains

Tier **T1**, status `outline+walls`, 42 elements (outline 1, coastline 3, road 10, building 17, wall 5, zone 4, water 2).

Evidence: documented 0, mapped 42, inferred 0, derived 2; heights documented 16, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1211607862 historic=martello_tower Q43142575 1 m from ledger point
- sea-0: DEM check failed {"cells":294,"medianInside":-1638.3,"medianOutside":-1638.3}
- sea-1: DEM check failed {"cells":382,"medianInside":-1638.3,"medianOutside":-1638.3}
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.98037/3.83182) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q43142575 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 42 elements); data/traces/torre-des-castellar-q43142575.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 42 elements; outline osm:way/1211607862 historic=martello_tower Q43142575 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
