# Château Dauzac

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-dauzac-q458595` |
| Coordinates | 45.01937, -0.62334 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.01937/-0.62334)) |
| Wikidata | [Q458595](https://www.wikidata.org/wiki/Q458595) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Labarde |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `location-only`, 29 elements (marker 1, waterway 3, zone 1, road 8, building 13, coastline 1, wall 1, water 1).

Evidence: documented 0, mapped 29, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- 779 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.01937/-0.62334) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=5; wikidata:Q458595 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 29 elements); data/traces/chateau-dauzac-q458595.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
