# Unterer Stadtturm, Vöcklabruck

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `unterer-stadtturm-vocklabruck-q64512961` |
| Coordinates | 48.00908, 13.65579 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.00908/13.65579)) |
| Wikidata | [Q64512961](https://www.wikidata.org/wiki/Q64512961) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Vöcklabruck |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 386 elements (outline 1, marker 2, road 141, waterway 5, building 234, wall 3).

Evidence: documented 0, mapped 386, inferred 0, derived 0; heights documented 0, inferred 0, unknown 237.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/149788830 historic=city_gate Q64512961 2 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.00908/13.65579) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=1; wikidata:Q64512961 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 386 elements); data/traces/unterer-stadtturm-vocklabruck-q64512961.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 386 elements; outline osm:way/149788830 historic=city_gate Q64512961 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
