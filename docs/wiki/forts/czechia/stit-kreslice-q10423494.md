# Štít (Křeslice)

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stit-kreslice-q10423494` |
| Coordinates | 50.02402, 14.5554 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.02402/14.5554)) |
| Wikidata | [Q10423494](https://www.wikidata.org/wiki/Q10423494) (CC0) |
| Wikidata class | fort |
| Types | homestead\|fortified house |
| Administrative area | Křeslice |
| Inception | 1822 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 92 elements (outline 1, road 21, building 63, waterway 1, zone 6).

Evidence: documented 0, mapped 92, inferred 0, derived 0; heights documented 32, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/51549533 historic=(none; chosen by its Wikidata id) Q10423494 15 m from ledger point
- origin moved 15 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.02402/14.5554) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; homestead\|fortified house; sitelinks=2; wikidata:Q10423494 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 99 elements); data/traces/stit-kreslice-q10423494.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 92 elements; outline osm:way/51549533 historic=(none; chosen by its Wikidata id) Q10423494 15 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
