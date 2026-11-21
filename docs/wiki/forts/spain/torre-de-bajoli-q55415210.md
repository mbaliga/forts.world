# Torre de Bajolí

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-bajoli-q55415210` |
| Coordinates | 40.01382, 3.80263 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.01382/3.80263)) |
| Wikidata | [Q55415210](https://www.wikidata.org/wiki/Q55415210) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Ciutadella |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | martello_tower |
| OSM `description` | Torre de Bajaolí. Es una torre de observación militar para la defensa de Menorca. Construida posiblemente en torno al año 1695 por los españoles. |

## What the model contains

Tier **T1**, status `outline+walls`, 31 elements (outline 1, coastline 1, road 3, cliff 1, wall 25).

Evidence: documented 0, mapped 31, inferred 0, derived 0; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1211609949 historic=martello_tower Q55415210 1 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 1 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.01382/3.80263) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q55415210 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 31 elements); data/traces/torre-de-bajoli-q55415210.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 31 elements; outline osm:way/1211609949 historic=martello_tower Q55415210 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
