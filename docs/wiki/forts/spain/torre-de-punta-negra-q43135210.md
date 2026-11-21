# Torre de Punta Negra

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-punta-negra-q43135210` |
| Coordinates | 36.74692, -3.21117 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.74692/-3.21117)) |
| Wikidata | [Q43135210](https://www.wikidata.org/wiki/Q43135210) (CC0) |
| Wikidata class | fort |
| Types | monument\|fortified tower |
| Administrative area | Albuñol |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `outline-only`, 16 elements (outline 1, coastline 1, road 2, building 11, water 1).

Evidence: documented 0, mapped 16, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/972798226 historic=(none; chosen by its Wikidata id) Q43135210 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":45,"medianInside":0,"medianOutside":86.8}
- 39 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.74692/-3.21117) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; monument\|fortified tower; sitelinks=0; wikidata:Q43135210 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 16 elements); data/traces/torre-de-punta-negra-q43135210.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 16 elements; outline osm:way/972798226 historic=(none; chosen by its Wikidata id) Q43135210 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
