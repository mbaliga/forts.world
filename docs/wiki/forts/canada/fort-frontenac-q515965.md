# Fort Frontenac

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-frontenac-q515965` |
| Coordinates | 44.23333, -76.47861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.23333/-76.47861)) |
| Wikidata | [Q515965](https://www.wikidata.org/wiki/Q515965) (CC0) |
| Wikidata class | fort |
| Types | fort\|trading post |
| Administrative area | Kingston |
| Inception | 1673 |
| Designations | national historic site of Canada |
| Wikipedia language editions | 13 |

## What the model contains

Tier **T1**, status `outline+walls`, 204 elements (outline 1, marker 1, road 154, building 37, waterway 1, wall 7, zone 3).

Evidence: documented 0, mapped 204, inferred 0, derived 0; heights documented 11, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/17787500 historic=(none; chosen by its Wikidata id) Q515965 56 m from ledger point
- origin moved 61 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.23333/-76.47861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|trading post; sitelinks=13; wikidata:Q515965 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 194 elements); data/traces/fort-frontenac-q515965.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 204 elements; outline osm:way/17787500 historic=(none; chosen by its Wikidata id) Q515965 56 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
