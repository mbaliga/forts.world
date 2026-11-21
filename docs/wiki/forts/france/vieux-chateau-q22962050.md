# Vieux-Château

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vieux-chateau-q22962050` |
| Coordinates | 50.38241, 2.33816 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.38241/2.33816)) |
| Wikidata | [Q22962050](https://www.wikidata.org/wiki/Q22962050) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|château |
| Administrative area | Saint-Pol-sur-Ternoise |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 220 elements (marker 1, road 90, building 897, waterway 7, zone 1, wall 1).

Evidence: documented 0, mapped 220, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 897 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.38241/2.33816) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|château; sitelinks=0; wikidata:Q22962050 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 220 elements); data/traces/vieux-chateau-q22962050.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
