# Petrovice Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `petrovice-castle-q21624314` |
| Coordinates | 49.2181, 13.44175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.2181/13.44175)) |
| Wikidata | [Q21624314](https://www.wikidata.org/wiki/Q21624314) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Petrovice u Sušice |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 192 elements (outline 1, marker 1, zone 9, water 2, waterway 4, road 65, building 108, retaining-wall 1, wall 1).

Evidence: documented 0, mapped 192, inferred 0, derived 0; heights documented 49, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/208692278 historic=(none; chosen by its Wikidata id) Q21624314 14 m from ledger point
- origin moved 14 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.2181/13.44175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q21624314 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 194 elements); data/traces/petrovice-castle-q21624314.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 192 elements; outline osm:way/208692278 historic=(none; chosen by its Wikidata id) Q21624314 14 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
