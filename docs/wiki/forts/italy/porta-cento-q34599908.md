# Porta Cento

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-cento-q34599908` |
| Coordinates | 44.71446, 11.30458 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.71446/11.30458)) |
| Wikidata | [Q34599908](https://www.wikidata.org/wiki/Q34599908) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|monument |
| Administrative area | Pieve di Cento |
| Inception | 1750 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 196 elements (outline 1, marker 5, road 74, building 113, zone 1, wall 2).

Evidence: documented 0, mapped 196, inferred 0, derived 0; heights documented 0, inferred 0, unknown 115.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33898335 historic=city_gate Q34599908 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.71446/11.30458) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|monument; sitelinks=2; wikidata:Q34599908 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 196 elements); data/traces/porta-cento-q34599908.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 196 elements; outline osm:way/33898335 historic=city_gate Q34599908 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
