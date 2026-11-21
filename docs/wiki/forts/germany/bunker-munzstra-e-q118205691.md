# Bunker Münzstraße

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-munzstra-e-q118205691` |
| Coordinates | 52.2636, 10.52506 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2636/10.52506)) |
| Wikidata | [Q118205691](https://www.wikidata.org/wiki/Q118205691) (CC0) |
| Wikidata class | fortification |
| Types | high-rise bunker |
| Administrative area | Brunswick |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `website` | https://3landesmuseen-braunschweig.de/herzog-anton-ulrich-museum/ausstellungen/dauerausstellungen/mittelalter |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 29, road 301, building 242, wall 10, zone 6, water 1, waterway 4).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 82, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/243689993 historic=castle Q317959 139 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 242 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 301 mapped (trace size budget); minor lanes are not drawn
- origin moved 139 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2636/10.52506) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; high-rise bunker; sitelinks=1; wikidata:Q118205691 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/bunker-munzstra-e-q118205691.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
