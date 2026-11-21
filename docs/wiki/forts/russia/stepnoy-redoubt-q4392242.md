# Stepnoy Redoubt

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stepnoy-redoubt-q4392242` |
| Coordinates | 55.0189, 72.81894 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.0189/72.81894)) |
| Wikidata | [Q4392242](https://www.wikidata.org/wiki/Q4392242) (CC0) |
| Wikidata class | fort |
| Types | redoubt\|historic site |
| Administrative area | Stepnoe |
| Inception | 1761 |
| Designations | regional cultural heritage site in Russia |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `ruins` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, waterway 2, road 2, water 2).

Evidence: documented 0, mapped 7, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/727220112 historic=ruins 8 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.0189/72.81894) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt\|historic site; sitelinks=1; wikidata:Q4392242 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 7 elements); data/traces/stepnoy-redoubt-q4392242.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
