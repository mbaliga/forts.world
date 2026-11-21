# Flakbatterie Mellum

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `flakbatterie-mellum-q74200124` |
| Coordinates | 53.71389, 8.14556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.71389/8.14556)) |
| Wikidata | [Q74200124](https://www.wikidata.org/wiki/Q74200124) (CC0) |
| Wikidata class | fortification |
| Types | anti-aircraft battery of the German Navy |
| Administrative area | Lower Saxony |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 16 elements (outline 1, coastline 1, road 6, building 2, zone 5, waterway 1).

Evidence: documented 0, mapped 16, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/101523939 historic=ruins 84 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 83 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.71389/8.14556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; anti-aircraft battery of the German Navy; sitelinks=2; wikidata:Q74200124 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 16 elements); data/traces/flakbatterie-mellum-q74200124.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
