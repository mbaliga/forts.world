# Torturm Obdach

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torturm-obdach-q37975120` |
| Coordinates | 47.06717, 14.69635 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.06717/14.69635)) |
| Wikidata | [Q37975120](https://www.wikidata.org/wiki/Q37975120) (CC0) |
| Wikidata class | fortification |
| Types | gate tower |
| Administrative area | Obdach |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | city_gate |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 238 elements (outline 1, marker 1, road 71, building 156, waterway 5, zone 4).

Evidence: documented 0, mapped 238, inferred 0, derived 0; heights documented 0, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/371312370 historic=city_gate Q37975120 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.06717/14.69635) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower; sitelinks=1; wikidata:Q37975120 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 234 elements); data/traces/torturm-obdach-q37975120.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 238 elements; outline osm:way/371312370 historic=city_gate Q37975120 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
