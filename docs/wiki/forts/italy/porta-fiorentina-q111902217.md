# Porta Fiorentina

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-fiorentina-q111902217` |
| Coordinates | 44.11779, 11.3795 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.11779/11.3795)) |
| Wikidata | [Q111902217](https://www.wikidata.org/wiki/Q111902217) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Firenzuola |
| Wikipedia language editions | 1 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 142 elements (outline 1, road 53, building 77, zone 2, waterway 2, wall 7).

Evidence: documented 0, mapped 142, inferred 0, derived 0; heights documented 0, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1452162724 historic=city_gate Q111902217 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.11779/11.3795) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q111902217 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 144 elements); data/traces/porta-fiorentina-q111902217.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 142 elements; outline osm:way/1452162724 historic=city_gate Q111902217 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
