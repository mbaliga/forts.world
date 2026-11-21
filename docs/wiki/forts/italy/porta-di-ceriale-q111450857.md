# Porta di Ceriale

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-di-ceriale-q111450857` |
| Coordinates | 44.10886, 8.24046 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.10886/8.24046)) |
| Wikidata | [Q111450857](https://www.wikidata.org/wiki/Q111450857) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Borghetto Santo Spirito |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 86 elements (outline 1, road 40, water 2, coastline 1, building 13, zone 1, wall 9, retaining-wall 8, cliff 3, waterway 8).

Evidence: documented 0, mapped 86, inferred 0, derived 0; heights documented 1, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/202166018 historic=castle 594 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 594 m from the ledger point to the centre of the mapped site
- 47 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.10886/8.24046) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q111450857 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 86 elements); data/traces/porta-di-ceriale-q111450857.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
