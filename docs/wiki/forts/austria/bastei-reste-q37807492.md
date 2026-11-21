# Bastei-Reste

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastei-reste-q37807492` |
| Coordinates | 47.58196, 12.16807 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.58196/12.16807)) |
| Wikidata | [Q37807492](https://www.wikidata.org/wiki/Q37807492) (CC0) |
| Wikidata class | fort |
| Types | bastion\|city walls |
| Administrative area | Kufstein |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 386 elements (outline 1, marker 21, road 430, waterway 14, building 372, wall 28, retaining-wall 23, zone 29).

Evidence: documented 0, mapped 386, inferred 0, derived 0; heights documented 37, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1837410 historic=castle Q700709 85 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 372 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 430 mapped (trace size budget); minor lanes are not drawn
- origin moved 85 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.58196/12.16807) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; bastion\|city walls; sitelinks=0; wikidata:Q37807492 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 386 elements); data/traces/bastei-reste-q37807492.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
