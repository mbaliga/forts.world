# Watchtower of Segurilla

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `watchtower-of-segurilla-q54448935` |
| Coordinates | 40.01604, -4.85706 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.01604/-4.85706)) |
| Wikidata | [Q54448935](https://www.wikidata.org/wiki/Q54448935) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|watchtower |
| Administrative area | Segurilla |
| Inception | 1000 |
| Designations | Bien de Interés Cultural\|Spanish historical heritage\|bien de interés cultural |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 10 elements (marker 1, road 7, zone 1, waterway 1).

Evidence: documented 0, mapped 10, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.01604/-4.85706) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|watchtower; sitelinks=2; wikidata:Q54448935 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 10 elements); data/traces/watchtower-of-segurilla-q54448935.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
