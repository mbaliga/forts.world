# Emplacement, so-called Fort Dehna, Adama Mickiewicza 102 in Nowy Dwór Mazowiecki

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `emplacement-so-called-fort-dehna-adama-mickiewic-q122195484` |
| Coordinates | 52.43548, 20.67021 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.43548/20.67021)) |
| Wikidata | [Q122195484](https://www.wikidata.org/wiki/Q122195484) (CC0) |
| Wikidata class | fortification |
| Types | gun position |
| Administrative area | Nowy Dwór Mazowiecki |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `website` | https://www.twierdzamodlin.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, marker 4, water 1, road 631, zone 303, wall 20, building 167, waterway 1, retaining-wall 10).

Evidence: documented 0, mapped 380, inferred 0, derived 0; heights documented 23, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/44445826 historic=castle Q47796 471 m from ledger point
- pruned to the outline plus 60 m: 1138 -> 1137 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 167 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 631 mapped (trace size budget); minor lanes are not drawn
- elements capped: kept the 380 nearest the outline centre of 409 mapped (trace size budget); the rest are not drawn
- origin moved 467 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.43548/20.67021) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gun position; sitelinks=0; wikidata:Q122195484 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/emplacement-so-called-fort-dehna-adama-mickiewic-q122195484.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
