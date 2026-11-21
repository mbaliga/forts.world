# Kremper Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kremper-tor-q1242431` |
| Coordinates | 54.10956, 10.81633 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.10956/10.81633)) |
| Wikidata | [Q1242431](https://www.wikidata.org/wiki/Q1242431) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|gatehouse |
| Administrative area | Neustadt in Holstein |
| Designations | Heritage monument in Schleswig-Holstein\|Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 130 elements (outline 1, road 27, coastline 1, zone 1, building 100).

Evidence: documented 0, mapped 130, inferred 0, derived 0; heights documented 86, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/193966688 historic=yes 672 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 673 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.10956/10.81633) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|gatehouse; sitelinks=1; wikidata:Q1242431 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 130 elements); data/traces/kremper-tor-q1242431.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
