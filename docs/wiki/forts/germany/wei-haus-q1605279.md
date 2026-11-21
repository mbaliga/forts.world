# Weißhaus

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wei-haus-q1605279` |
| Coordinates | 50.9181, 6.93232 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9181/6.93232)) |
| Wikidata | [Q1605279](https://www.wikidata.org/wiki/Q1605279) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Sülz |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 1, road 85, wall 1, building 223, zone 1).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 105, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/51597123 historic=(none; chosen by its Wikidata id) Q1605279 19 m from ledger point
- origin moved 19 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9181/6.93232) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q1605279 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 307 elements); data/traces/wei-haus-q1605279.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 312 elements; outline osm:way/51597123 historic=(none; chosen by its Wikidata id) Q1605279 19 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
