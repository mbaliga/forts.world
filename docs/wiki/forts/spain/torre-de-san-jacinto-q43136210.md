# Torre de San Jacinto

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-san-jacinto-q43136210` |
| Coordinates | 36.80854, -6.3839 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.80854/-6.3839)) |
| Wikidata | [Q43136210](https://www.wikidata.org/wiki/Q43136210) (CC0) |
| Wikidata class | fortification |
| Types | watchtower\|monument |
| Administrative area | Almonte |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | watchtower |
| OSM `heritage` | yes |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 5 elements (outline 1, road 3, zone 1).

Evidence: documented 0, mapped 5, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/768971299 historic=watchtower Q43136210 1 m from ledger point

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.80854/-6.3839) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower\|monument; sitelinks=1; wikidata:Q43136210 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 5 elements); data/traces/torre-de-san-jacinto-q43136210.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 5 elements; outline osm:way/768971299 historic=watchtower Q43136210 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
