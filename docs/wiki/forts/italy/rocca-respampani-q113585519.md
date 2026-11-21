# Rocca Respampani

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-respampani-q113585519` |
| Coordinates | 42.36565, 11.91159 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.36565/11.91159)) |
| Wikidata | [Q113585519](https://www.wikidata.org/wiki/Q113585519) (CC0) |
| Wikidata class | fortification |
| Types | rocca |
| Administrative area | Monte Romano |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 22 elements (outline 1, road 3, zone 2, building 13, waterway 2, wall 1).

Evidence: documented 0, mapped 22, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/880731416 historic=manor Q113585519 9 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.36565/11.91159) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rocca; sitelinks=1; wikidata:Q113585519 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 39 elements); data/traces/rocca-respampani-q113585519.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 22 elements; outline osm:way/880731416 historic=manor Q113585519 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
