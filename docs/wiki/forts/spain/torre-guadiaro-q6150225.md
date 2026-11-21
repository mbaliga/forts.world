# Torre Guadiaro

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-guadiaro-q6150225` |
| Coordinates | 36.29438, -5.27498 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.29438/-5.27498)) |
| Wikidata | [Q6150225](https://www.wikidata.org/wiki/Q6150225) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | San Roque |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 77 elements (outline 1, marker 2, road 47, water 1, coastline 1, zone 11, building 14).

Evidence: documented 0, mapped 77, inferred 0, derived 0; heights documented 1, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/769120907 historic=(none; chosen by its Wikidata id) Q6150225 6 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.29438/-5.27498) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q6150225 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 75 elements); data/traces/torre-guadiaro-q6150225.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 77 elements; outline osm:way/769120907 historic=(none; chosen by its Wikidata id) Q6150225 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
