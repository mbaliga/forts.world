# Osowiec Fortress

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `osowiec-fortress-q2503140` |
| Coordinates | 53.46861, 22.64389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.46861/22.64389)) |
| Wikidata | [Q2503140](https://www.wikidata.org/wiki/Q2503140) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Osowiec-Twierdza |
| Inception | 1882 |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Twierdza Osowiec zbudowana przez Rosjan w latach 1882-1892. Twierdza składała się z 4 fortów: "Centralny" - fort nr 1, "Zarzeczny" - fort nr 2, "Szwedzki" - fort nr 3 i "Nowy” fort nr 4. |

## What the model contains

Tier **T1**, status `outline-only`, 8 elements (outline 1, road 5, water 1, zone 1).

Evidence: documented 0, mapped 8, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/256702011 historic=castle 1307 m from ledger point
- origin moved 1306 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.46861/22.64389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=20; wikidata:Q2503140 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 8 elements); data/traces/osowiec-fortress-q2503140.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
