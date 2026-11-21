# Burry Holms

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burry-holms-q248118` |
| Coordinates | 51.6094, -4.3135 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.6094/-4.3135)) |
| Wikidata | [Q248118](https://www.wikidata.org/wiki/Q248118) (CC0) |
| Wikidata class | fort |
| Types | promontory fort\|tidal island |
| Administrative area | Swansea |
| Designations | scheduled monument |
| Wikipedia language editions | 9 |

## What the model contains

Tier **T1**, status `outline-only`, 30 elements (outline 1, marker 4, road 14, coastline 3, zone 7, water 1).

Evidence: documented 0, mapped 30, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96327659 historic=(none; chosen by its Wikidata id) Q248118 42 m from ledger point
- origin moved 42 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":1335,"medianInside":-1,"medianOutside":2.8}
- 375 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.6094/-4.3135) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; promontory fort\|tidal island; sitelinks=9; wikidata:Q248118 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 22 elements); data/traces/burry-holms-q248118.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 30 elements; outline osm:way/96327659 historic=(none; chosen by its Wikidata id) Q248118 42 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
