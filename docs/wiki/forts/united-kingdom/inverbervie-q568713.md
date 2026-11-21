# Inverbervie

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `inverbervie-q568713` |
| Coordinates | 56.8433, -2.28164 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.8433/-2.28164)) |
| Wikidata | [Q568713](https://www.wikidata.org/wiki/Q568713) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | Aberdeenshire |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline-only`, 237 elements (outline 1, coastline 1, road 40, zone 9, building 185, water 1).

Evidence: documented 0, mapped 237, inferred 0, derived 1; heights documented 0, inferred 0, unknown 185.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/961993074 historic=castle Q17775673 427 m from ledger point
- origin moved 428 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":51,"medianInside":5,"medianOutside":22.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.8433/-2.28164) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=14; wikidata:Q568713 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 237 elements); data/traces/inverbervie-q568713.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
