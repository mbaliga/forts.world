# Pandu Rajar Dhibi

> India · Ausgram II community development block · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pandu-rajar-dhibi-q7130757` |
| Coordinates | 23.581364, 87.64225 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.581364/87.64225)) |
| Wikidata | [Q7130757](https://www.wikidata.org/wiki/Q7130757) (CC0) |
| Programme catalogue | confidence high, significance rank 502; sources wikidata:Q7130757;smith-newton:r3758 |

## What the model contains

Tier **T1**, status `location-only`, 5 elements (road 5).

Evidence: documented 0, mapped 5, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.581364/87.64225) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

Alpha-X batch (2026-11-14): geometry requested. type=fort; confidence=high; rank=502; sources=2 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (location-only, 5 elements); data/traces/pandu-rajar-dhibi-q7130757.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 700 m radius (52 elements), terrain tiles unchanged, auto-T1 rebuilt (location-only, 5 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
