# Fortress Ra's al-Hadd

> Oman · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-ra-s-al-hadd-q6413898` |
| Coordinates | 22.52389, 59.79 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.52389/59.79)) |
| Wikidata | [Q6413898](https://www.wikidata.org/wiki/Q6413898) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 27 elements (outline 1, marker 2, coastline 1, road 14, building 8, zone 1).

Evidence: documented 0, mapped 27, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/284672117 historic=castle 11 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 12 m from the ledger point to the outline centroid
- 12 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.52389/59.79) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=4; wikidata:Q6413898 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 27 elements); data/traces/fortress-ra-s-al-hadd-q6413898.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/oman.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
