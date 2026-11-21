# Limpurg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `limpurg-q1012977` |
| Coordinates | 49.1067, 9.74694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1067/9.74694)) |
| Wikidata | [Q1012977](https://www.wikidata.org/wiki/Q1012977) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Schwäbisch Hall |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 202 elements (outline 1, road 90, waterway 9, zone 7, building 95).

Evidence: documented 0, mapped 202, inferred 0, derived 0; heights documented 0, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/561312122 historic=ruins Q1012977 159 m from ledger point
- origin moved 160 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1067/9.74694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=3; wikidata:Q1012977 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 202 elements); data/traces/limpurg-q1012977.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
