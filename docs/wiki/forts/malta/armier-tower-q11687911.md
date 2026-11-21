# Armier Tower

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `armier-tower-q11687911` |
| Coordinates | 35.99556, 14.36444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.99556/14.36444)) |
| Wikidata | [Q11687911](https://www.wikidata.org/wiki/Q11687911) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Mellieħa |
| Inception | 1658 |
| Designations | Grade 1 |
| Wikipedia language editions | 7 |
| OSM `description` | Small coastal watchtower constructed by Grand Master Martin de Redin |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 126 elements (outline 1, marker 1, road 25, coastline 1, building 87, wall 6, retaining-wall 1, zone 1, water 3).

Evidence: documented 0, mapped 126, inferred 0, derived 3; heights documented 0, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/465255351 historic=(none; chosen by its Wikidata id) Q11687911 8 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":400,"medianInside":6.3,"medianOutside":0.3}
- sea-1: DEM check ok {"cells":48,"medianInside":0.1,"medianOutside":6.7}
- sea-2: DEM check ok {"cells":7,"medianInside":0,"medianOutside":6.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.99556/14.36444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=7; wikidata:Q11687911 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 115 elements); data/traces/armier-tower-q11687911.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 126 elements; outline osm:way/465255351 historic=(none; chosen by its Wikidata id) Q11687911 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
