# Għallis Tower

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `g-allis-tower-q1562388` |
| Coordinates | 35.95306, 14.43417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.95306/14.43417)) |
| Wikidata | [Q1562388](https://www.wikidata.org/wiki/Q1562388) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Naxxar |
| Inception | 1658 |
| Designations | Grade 1 |
| Wikipedia language editions | 9 |
| OSM `description` | De Redin Tower |

## What the model contains

Tier **T1**, status `outline+walls`, 27 elements (outline 1, road 10, wall 9, coastline 1, building 2, zone 3, water 1).

Evidence: documented 0, mapped 27, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/133605357 historic=(none; chosen by its Wikidata id) Q1562388 34 m from ledger point
- origin moved 34 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":67,"medianInside":0.9,"medianOutside":11.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.95306/14.43417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=9; wikidata:Q1562388 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 30 elements); data/traces/g-allis-tower-q1562388.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 27 elements; outline osm:way/133605357 historic=(none; chosen by its Wikidata id) Q1562388 34 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
