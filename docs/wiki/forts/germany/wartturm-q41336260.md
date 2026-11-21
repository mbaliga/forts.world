# Wartturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wartturm-q41336260` |
| Coordinates | 50.23096, 10.18709 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.23096/10.18709)) |
| Wikidata | [Q41336260](https://www.wikidata.org/wiki/Q41336260) (CC0) |
| Wikidata class | fortification |
| Types | medieval watchtower |
| Administrative area | Münnerstadt |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, road 11, zone 1, wall 1).

Evidence: documented 0, mapped 14, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29081224 historic=yes 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.23096/10.18709) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; medieval watchtower; sitelinks=0; wikidata:Q41336260 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 14 elements); data/traces/wartturm-q41336260.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
