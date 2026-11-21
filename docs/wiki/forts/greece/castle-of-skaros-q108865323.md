# Castle of Skaros

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-skaros-q108865323` |
| Coordinates | 36.43233, 25.41819 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.43233/25.41819)) |
| Wikidata | [Q108865323](https://www.wikidata.org/wiki/Q108865323) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Thira Municipality |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 29 elements (marker 2, road 17, building 1, zone 1, cliff 5, coastline 1, wall 2).

Evidence: documented 0, mapped 29, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.43233/25.41819) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q108865323 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 29 elements); data/traces/castle-of-skaros-q108865323.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
