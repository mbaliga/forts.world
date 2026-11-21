# Dicker Turm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dicker-turm-q97321422` |
| Coordinates | 51.29886, 6.85047 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.29886/6.85047)) |
| Wikidata | [Q97321422](https://www.wikidata.org/wiki/Q97321422) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Ratingen Mitte |
| Inception | 1439 |
| Wikipedia language editions | 1 |
| OSM `historic` | tower |
| OSM `heritage` | 8 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 12, road 197, building 338, zone 3, water 2, waterway 2, wall 20).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 95, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/101012976 historic=tower Q97321422 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 338 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 197 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.29886/6.85047) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q97321422 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 319 elements); data/traces/dicker-turm-q97321422.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 310 elements; outline osm:way/101012976 historic=tower Q97321422 0 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
