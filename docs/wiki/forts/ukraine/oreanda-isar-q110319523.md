# Oreanda-Isar

> Ukraine · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oreanda-isar-q110319523` |
| Coordinates | 44.45411, 34.1355 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.45411/34.1355)) |
| Wikidata | [Q110319523](https://www.wikidata.org/wiki/Q110319523) (CC0) |
| Wikidata class | fort |
| Types | fortified settlement\|Isar |
| Administrative area | Oreanda |
| Inception | 1000 |
| Designations | archaeological monument of local importance of Ukraine |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 31 elements (marker 1, coastline 1, road 16, building 11, zone 1, cliff 1).

Evidence: documented 0, mapped 31, inferred 0, derived 0; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.45411/34.1355) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified settlement\|Isar; sitelinks=3; wikidata:Q110319523 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 31 elements); data/traces/oreanda-isar-q110319523.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
