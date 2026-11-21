# Laufertorkeller

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `laufertorkeller-q80277139` |
| Coordinates | 49.45749, 11.08756 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.45749/11.08756)) |
| Wikidata | [Q80277139](https://www.wikidata.org/wiki/Q80277139) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|rock cellar |
| Administrative area | Nuremberg |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 1, road 244, zone 5, wall 27, building 140, retaining-wall 2, waterway 1).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 52, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23447844 historic=citywalls Q1254235 49 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 140 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 244 mapped (trace size budget); minor lanes are not drawn
- origin moved 48 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.45749/11.08756) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|rock cellar; sitelinks=2; wikidata:Q80277139 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/laufertorkeller-q80277139.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
