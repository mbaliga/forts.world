# Tilleda royal palace

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tilleda-royal-palace-q2082236` |
| Coordinates | 51.4169, 11.1361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4169/11.1361)) |
| Wikidata | [Q2082236](https://www.wikidata.org/wiki/Q2082236) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|open-air museum\|kaiserpfalz |
| Administrative area | Kelbra |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 3, road 157, zone 34, building 258, wall 24, waterway 1).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 14, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/235287762 historic=archaeological_site Q2082236 54 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 258 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 157 mapped (trace size budget); minor lanes are not drawn
- origin moved 56 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4169/11.1361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|open-air museum\|kaiserpfalz; sitelinks=2; wikidata:Q2082236 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/tilleda-royal-palace-q2082236.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
