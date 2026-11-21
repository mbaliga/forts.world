# Untertreteraum 31

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `untertreteraum-31-q108123080` |
| Coordinates | 48.41393, 9.95314 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.41393/9.95314)) |
| Wikidata | [Q108123080](https://www.wikidata.org/wiki/Q108123080) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|defence work |
| Administrative area | Ulm |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 266 elements (outline 1, road 178, zone 3, building 112).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 26, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/234445887 historic=(none; chosen by its Wikidata id) Q108123080 4 m from ledger point
- roads capped: kept the 150 longest of 178 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.41393/9.95314) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|defence work; sitelinks=1; wikidata:Q108123080 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 283 elements); data/traces/untertreteraum-31-q108123080.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 266 elements; outline osm:way/234445887 historic=(none; chosen by its Wikidata id) Q108123080 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
