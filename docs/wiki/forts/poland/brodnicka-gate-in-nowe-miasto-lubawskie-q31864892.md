# Brodnicka Gate in Nowe Miasto Lubawskie

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brodnicka-gate-in-nowe-miasto-lubawskie-q31864892` |
| Coordinates | 53.42253, 19.59233 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.42253/19.59233)) |
| Wikidata | [Q31864892](https://www.wikidata.org/wiki/Q31864892) (CC0) |
| Wikidata class | fortification |
| Types | gate\|city gate |
| Administrative area | Nowe Miasto Lubawskie |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.zamki.pl/?idzamku=nowem |

## What the model contains

Tier **T1**, status `outline+walls`, 237 elements (outline 1, road 109, waterway 1, building 289, water 2, wall 3).

Evidence: documented 0, mapped 237, inferred 0, derived 0; heights documented 3, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1124651250 historic=citywalls 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 289 mapped (trace size budget); the rest of the town is not drawn
- origin moved 23 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.42253/19.59233) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate\|city gate; sitelinks=3; wikidata:Q31864892 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 237 elements); data/traces/brodnicka-gate-in-nowe-miasto-lubawskie-q31864892.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
