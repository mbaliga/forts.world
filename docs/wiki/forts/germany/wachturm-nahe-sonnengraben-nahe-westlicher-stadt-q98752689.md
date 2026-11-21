# Wachturm Nähe Sonnengraben; Nähe Westlicher Stadtgraben; Nähe Östlicher Stadtgraben; Nähe Am Maxtor in Schongau

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-nahe-sonnengraben-nahe-westlicher-stadt-q98752689` |
| Coordinates | 47.8138, 10.89427 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.8138/10.89427)) |
| Wikidata | [Q98752689](https://www.wikidata.org/wiki/Q98752689) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 7, road 297, building 587, water 3, zone 9, waterway 1, wall 16, retaining-wall 5).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 2, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1029641668 historic=citywalls 65 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 587 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 297 mapped (trace size budget); minor lanes are not drawn
- origin moved 65 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.8138/10.89427) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q98752689 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/wachturm-nahe-sonnengraben-nahe-westlicher-stadt-q98752689.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
