# Kachanivka

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kachanivka-q798615` |
| Coordinates | 50.83672, 32.65527 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.83672/32.65527)) |
| Wikidata | [Q798615](https://www.wikidata.org/wiki/Q798615) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|park\|château\|palace complex\|cultural heritage site in Ukraine\|history museum |
| Administrative area | Kachanivka |
| Inception | 1770 |
| Designations | State Register of Immovable Monuments of Ukraine |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | http://www.kachanivka.in.ua |

## What the model contains

Tier **T1**, status `outline-only`, 33 elements (outline 1, marker 2, road 19, building 6, zone 3, retaining-wall 2).

Evidence: documented 0, mapped 33, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/433011668 historic=castle Q798615 17 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.83672/32.65527) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|park\|château\|palace complex\|cultural heritage site in Ukraine\|history museum; sitelinks=20; wikidata:Q798615 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 33 elements); data/traces/kachanivka-q798615.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
