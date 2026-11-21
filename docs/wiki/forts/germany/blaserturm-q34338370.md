# Blaserturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blaserturm-q34338370` |
| Coordinates | 47.78207, 9.6137 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.78207/9.6137)) |
| Wikidata | [Q34338370](https://www.wikidata.org/wiki/Q34338370) (CC0) |
| Wikidata class | fortification |
| Types | watchtower\|architectural landmark |
| Administrative area | Ravensburg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `description` | Zentraler Feuerwacht, Uhren- und Spähturm der Stadt. Nach Einsturz im Jahr 1552 neu errichtet. Bis 1911 mit einem Turmwächter (Blaser) besetzt. Höhe: 51m, 212 Stufen |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 16, road 181, building 589, waterway 13, wall 1, zone 6).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 29, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/143095620 historic=yes Q34338370 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 589 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 181 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.78207/9.6137) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower\|architectural landmark; sitelinks=2; wikidata:Q34338370 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/blaserturm-q34338370.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
