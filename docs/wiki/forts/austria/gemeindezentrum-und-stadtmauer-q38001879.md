# Gemeindezentrum und Stadtmauer

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gemeindezentrum-und-stadtmauer-q38001879` |
| Coordinates | 47.91321, 16.69539 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.91321/16.69539)) |
| Wikidata | [Q38001879](https://www.wikidata.org/wiki/Q38001879) (CC0) |
| Wikidata class | fortification |
| Types | municipal office\|city walls |
| Administrative area | Purbach am Neusiedlersee |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 0 |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, marker 4, road 64, building 318, wall 56, zone 2, waterway 5).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 36, inferred 0, unknown 140.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/192467032 historic=(none; chosen by its Wikidata id) Q38001879 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 318 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.91321/16.69539) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; municipal office\|city walls; sitelinks=0; wikidata:Q38001879 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 254 elements); data/traces/gemeindezentrum-und-stadtmauer-q38001879.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 252 elements; outline osm:way/192467032 historic=(none; chosen by its Wikidata id) Q38001879 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
