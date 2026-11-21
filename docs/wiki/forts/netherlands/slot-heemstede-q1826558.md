# Slot Heemstede

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `slot-heemstede-q1826558` |
| Coordinates | 52.33966, 4.63076 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.33966/4.63076)) |
| Wikidata | [Q1826558](https://www.wikidata.org/wiki/Q1826558) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle\|ruins\|château\|estate |
| Administrative area | Heemstede |
| Designations | Rijksmonument |
| Wikipedia language editions | 5 |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, marker 1, road 103, waterway 1, zone 31, water 7, building 618, wall 3).

Evidence: documented 0, mapped 267, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/272942116 historic=(none; chosen by its Wikidata id) Q1826558 53 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 618 mapped (trace size budget); the rest of the town is not drawn
- origin moved 52 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.33966/4.63076) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle\|ruins\|château\|estate; sitelinks=5; wikidata:Q1826558 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 259 elements); data/traces/slot-heemstede-q1826558.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 267 elements; outline osm:way/272942116 historic=(none; chosen by its Wikidata id) Q1826558 53 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
