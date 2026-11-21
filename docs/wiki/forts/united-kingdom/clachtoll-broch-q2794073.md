# Clachtoll Broch

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `clachtoll-broch-q2794073` |
| Coordinates | 58.19553, -5.34231 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.19553/-5.34231)) |
| Wikidata | [Q2794073](https://www.wikidata.org/wiki/Q2794073) (CC0) |
| Wikidata class | fort |
| Types | promontory fort |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 8 elements (outline 1, water 2, road 2, coastline 3).

Evidence: documented 0, mapped 8, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1385622447 historic=(none; chosen by its Wikidata id) Q2794073 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":197,"medianInside":28,"medianOutside":6.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.19553/-5.34231) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; promontory fort; sitelinks=2; wikidata:Q2794073 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/clachtoll-broch-q2794073.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 8 elements; outline osm:way/1385622447 historic=(none; chosen by its Wikidata id) Q2794073 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
