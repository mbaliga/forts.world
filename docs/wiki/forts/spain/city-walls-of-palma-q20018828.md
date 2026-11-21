# City walls of Palma

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-palma-q20018828` |
| Coordinates | 39.56694, 2.64722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.56694/2.64722)) |
| Wikidata | [Q20018828](https://www.wikidata.org/wiki/Q20018828) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|city walls |
| Administrative area | Palma |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |
| OSM `description` | Fortified palace of Palma, originally built as an Arab fort and then used as an official royal residence. |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 7, road 192, building 289, zone 9, wall 10, water 8, retaining-wall 6, coastline 1).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 13, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2424202 historic=castle Q3176377 110 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 289 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 192 mapped (trace size budget); minor lanes are not drawn
- origin moved 108 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.56694/2.64722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|city walls; sitelinks=3; wikidata:Q20018828 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/city-walls-of-palma-q20018828.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
