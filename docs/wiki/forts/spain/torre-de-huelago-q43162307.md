# Torre de Huélago

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-huelago-q43162307` |
| Coordinates | 37.39679, -3.25825 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.39679/-3.25825)) |
| Wikidata | [Q43162307](https://www.wikidata.org/wiki/Q43162307) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|monument |
| Administrative area | Darro |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | tower |

## What the model contains

Tier **T1**, status `outline-only`, 4 elements (outline 1, road 2, waterway 1).

Evidence: documented 0, mapped 4, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1360056862 historic=tower Q43162307 93 m from ledger point
- origin moved 93 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.39679/-3.25825) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|monument; sitelinks=0; wikidata:Q43162307 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 5 elements); data/traces/torre-de-huelago-q43162307.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 4 elements; outline osm:way/1360056862 historic=tower Q43162307 93 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
