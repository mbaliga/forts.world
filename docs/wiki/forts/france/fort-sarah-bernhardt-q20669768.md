# Fort Sarah Bernhardt

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-sarah-bernhardt-q20669768` |
| Coordinates | 47.3858, -3.24934 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.3858/-3.24934)) |
| Wikidata | [Q20669768](https://www.wikidata.org/wiki/Q20669768) (CC0) |
| Wikidata class | fort |
| Types | blockhouse |
| Administrative area | Sauzon |
| Designations | Maisons des Illustres\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 158 elements (outline 1, coastline 27, road 72, building 5, zone 37, cliff 1, wall 9, water 6).

Evidence: documented 0, mapped 158, inferred 0, derived 5; heights documented 4, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63793330 historic=(none; chosen by its Wikidata id) Q20669768 1 m from ledger point
- island ring (460 m2) cut out of sea-3
- sea-0: DEM check ok {"cells":6,"medianInside":0.3,"medianOutside":4.8}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":4.8}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":4.8}
- sea-3: DEM check ok {"cells":399,"medianInside":4.7,"medianOutside":5.7}
- sea-4: DEM check ok {"cells":130,"medianInside":0,"medianOutside":10.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.3858/-3.24934) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; blockhouse; sitelinks=2; wikidata:Q20669768 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 158 elements); data/traces/fort-sarah-bernhardt-q20669768.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 158 elements; outline osm:way/63793330 historic=(none; chosen by its Wikidata id) Q20669768 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
