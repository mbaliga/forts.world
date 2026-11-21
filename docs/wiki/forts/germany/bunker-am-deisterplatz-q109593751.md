# Bunker am Deisterplatz

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-am-deisterplatz-q109593751` |
| Coordinates | 52.3614, 9.71408 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.3614/9.71408)) |
| Wikidata | [Q109593751](https://www.wikidata.org/wiki/Q109593751) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter\|Rundturm |
| Administrative area | Linden-Limmer |
| Inception | 1941 |
| Designations | architectural heritage monument in Lower Saxony |
| Wikipedia language editions | 2 |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 295 elements (outline 1, marker 1, road 153, zone 4, water 1, building 130, waterway 1, wall 4).

Evidence: documented 0, mapped 295, inferred 0, derived 0; heights documented 49, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/27486285 historic=(none; chosen by its Wikidata id) Q109593751 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.3614/9.71408) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter\|Rundturm; sitelinks=2; wikidata:Q109593751 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 295 elements); data/traces/bunker-am-deisterplatz-q109593751.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 295 elements; outline osm:way/27486285 historic=(none; chosen by its Wikidata id) Q109593751 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
