# Cape Trafalgar lighthouse

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cape-trafalgar-lighthouse-q5856371` |
| Coordinates | 36.18291, -6.03517 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.18291/-6.03517)) |
| Wikidata | [Q5856371](https://www.wikidata.org/wiki/Q5856371) (CC0) |
| Wikidata class | fortification |
| Types | lighthouse\|watchtower |
| Administrative area | Barbate |
| Inception | 1862 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 12 elements (outline 1, marker 1, road 4, coastline 2, zone 1, water 3).

Evidence: documented 0, mapped 12, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1033563686 historic=archaeological_site Q110712055 420 m from ledger point
- origin moved 419 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":251,"medianInside":0,"medianOutside":1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.18291/-6.03517) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; lighthouse\|watchtower; sitelinks=3; wikidata:Q5856371 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 12 elements); data/traces/cape-trafalgar-lighthouse-q5856371.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
