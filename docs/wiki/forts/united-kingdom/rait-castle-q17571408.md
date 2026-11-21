# Rait Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rait-castle-q17571408` |
| Coordinates | 57.5493, -3.84999 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.5493/-3.84999)) |
| Wikidata | [Q17571408](https://www.wikidata.org/wiki/Q17571408) (CC0) |
| Wikidata class | castle |
| Types | castle\|hall house |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |
| OSM `ruins` | yes |
| OSM `website` | https://www.saveraitcastle.org/ |

## What the model contains

Tier **T1**, status `outline-only`, 6 elements (outline 1, road 4, zone 1).

Evidence: documented 0, mapped 6, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/366543894 historic=(none; chosen by its Wikidata id) Q17571408 12 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.5493/-3.84999) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|hall house; sitelinks=4; wikidata:Q17571408 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 6 elements); data/traces/rait-castle-q17571408.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 6 elements; outline osm:way/366543894 historic=(none; chosen by its Wikidata id) Q17571408 12 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
