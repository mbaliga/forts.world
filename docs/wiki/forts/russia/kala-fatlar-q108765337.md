# Kala-Fatlar

> Russia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kala-fatlar-q108765337` |
| Coordinates | 44.46389, 33.64167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.46389/33.64167)) |
| Wikidata | [Q108765337](https://www.wikidata.org/wiki/Q108765337) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Balaklava Raion |
| Inception | 1300 |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 11 elements (marker 1, cliff 2, coastline 1, road 4, zone 2, water 1).

Evidence: documented 0, mapped 11, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":13,"medianInside":15.9,"medianOutside":102.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.46389/33.64167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=4; wikidata:Q108765337 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 11 elements); data/traces/kala-fatlar-q108765337.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
