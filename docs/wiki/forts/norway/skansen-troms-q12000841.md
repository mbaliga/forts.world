# Skansen (Tromsø)

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skansen-troms-q12000841` |
| Coordinates | 69.65292, 18.96419 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/69.65292/18.96419)) |
| Wikidata | [Q12000841](https://www.wikidata.org/wiki/Q12000841) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Tromsø Municipality |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 394 elements (outline 1, marker 7, road 191, building 180, coastline 11, zone 2, water 2).

Evidence: documented 0, mapped 394, inferred 0, derived 2; heights documented 80, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/108570306 historic=castle Q12000841 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":100,"medianInside":0,"medianOutside":3.1}
- sea-1: DEM check ok {"cells":20,"medianInside":0,"medianOutside":2.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/69.65292/18.96419) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=4; wikidata:Q12000841 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 394 elements); data/traces/skansen-troms-q12000841.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
