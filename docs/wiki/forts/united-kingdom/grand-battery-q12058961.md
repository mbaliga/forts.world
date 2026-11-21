# Grand Battery

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grand-battery-q12058961` |
| Coordinates | 36.1454, -5.3521 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.1454/-5.3521)) |
| Wikidata | [Q12058961](https://www.wikidata.org/wiki/Q12058961) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Gibraltar |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `description` | Fortified gun emplacement, ("casemate"), and bombproof barracks built by the British in 1817. |

## What the model contains

Tier **T1**, status `outline+walls`, 390 elements (outline 1, marker 9, road 190, building 141, wall 30, retaining-wall 11, coastline 1, water 3, zone 2, cliff 2).

Evidence: documented 0, mapped 390, inferred 0, derived 1; heights documented 3, inferred 0, unknown 179.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/137335923 historic=fort Q862392 43 m from ledger point
- origin moved 44 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":8.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.1454/-5.3521) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q12058961 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 390 elements); data/traces/grand-battery-q12058961.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
