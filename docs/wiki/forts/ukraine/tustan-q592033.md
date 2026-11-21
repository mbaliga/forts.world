# Tustan

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tustan-q592033` |
| Coordinates | 49.19142, 23.40952 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.19142/23.40952)) |
| Wikidata | [Q592033](https://www.wikidata.org/wiki/Q592033) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Urych |
| Wikipedia language editions | 9 |
| OSM `website` | https://tustan.ua/ |

## What the model contains

Tier **T1**, status `outline-only`, 56 elements (outline 1, marker 2, road 39, waterway 6, zone 5, building 3).

Evidence: documented 0, mapped 56, inferred 0, derived 0; heights documented 1, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/177657517 historic=(none; chosen by its Wikidata id) Q592033 14 m from ledger point
- origin moved 15 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.19142/23.40952) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=9; wikidata:Q592033 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 57 elements); data/traces/tustan-q592033.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 56 elements; outline osm:way/177657517 historic=(none; chosen by its Wikidata id) Q592033 14 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
