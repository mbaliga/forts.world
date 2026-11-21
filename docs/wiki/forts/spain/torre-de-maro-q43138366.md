# Torre de Maro

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-maro-q43138366` |
| Coordinates | 36.75354, -3.83001 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.75354/-3.83001)) |
| Wikidata | [Q43138366](https://www.wikidata.org/wiki/Q43138366) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Nerja |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `website` | https://esnerja.com/que-ver-y-hacer/torre-de-maro/ |

## What the model contains

Tier **T1**, status `outline-only`, 23 elements (outline 1, road 16, coastline 1, building 3, waterway 1, water 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42945505 historic=(none; chosen by its Wikidata id) Q43138366 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":61,"medianInside":0,"medianOutside":74.9}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.75354/-3.83001) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q43138366 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 23 elements); data/traces/torre-de-maro-q43138366.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 23 elements; outline osm:way/42945505 historic=(none; chosen by its Wikidata id) Q43138366 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
