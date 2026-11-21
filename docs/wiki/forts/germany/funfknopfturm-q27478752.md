# Fünfknopfturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `funfknopfturm-q27478752` |
| Coordinates | 48.7995, 9.79247 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.7995/9.79247)) |
| Wikidata | [Q27478752](https://www.wikidata.org/wiki/Q27478752) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Schwäbisch Gmünd |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, marker 4, road 189, building 276, wall 3, zone 1, waterway 1).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/227577527 historic=citywalls 550 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 276 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 189 mapped (trace size budget); minor lanes are not drawn
- origin moved 551 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.7995/9.79247) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q27478752 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/funfknopfturm-q27478752.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
