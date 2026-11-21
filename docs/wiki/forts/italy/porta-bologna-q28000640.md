# Porta Bologna

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-bologna-q28000640` |
| Coordinates | 44.71158, 11.30613 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.71158/11.30613)) |
| Wikidata | [Q28000640](https://www.wikidata.org/wiki/Q28000640) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|monument\|museum building |
| Administrative area | Pieve di Cento |
| Inception | 1350 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 172 elements (outline 1, marker 1, road 75, building 90, zone 2, wall 3).

Evidence: documented 0, mapped 172, inferred 0, derived 0; heights documented 0, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33898336 historic=city_gate Q28000640 4 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.71158/11.30613) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|monument\|museum building; sitelinks=2; wikidata:Q28000640 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 173 elements); data/traces/porta-bologna-q28000640.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 172 elements; outline osm:way/33898336 historic=city_gate Q28000640 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
