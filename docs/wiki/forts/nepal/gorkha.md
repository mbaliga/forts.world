# Gorkha Durbar

> Nepal · Gandaki · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gorkha` |
| Coordinates | 28.0044, 84.6289 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.0044/84.6289)) |
| Programme catalogue | confidence high, significance rank 314; sources catalogue:gorkha;wikidata:Q66133854;smith-newton:r3840 |

## What the model contains

Tier **T1**, status `location-only`, 82 elements (marker 2, road 14, building 62, zone 4).

Evidence: documented 0, mapped 82, inferred 0, derived 0; heights documented 0, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.0044/84.6289) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/gorkha-pass.md](../../../research/gorkha-pass.md)
- [docs/research/gorkhatri-q5586577-pass.md](../../../research/gorkhatri-q5586577-pass.md)

## Ledger note

Alpha-Q batch (2026-11-11): 10 forts spread across A-Z starting at Q (seq 7); distinct from batch 0 and the K, H, L, X, S, T, Y, U, I sets. coords from wikidata (was 28.007,84.629) \| 2026-11-14: auto-T1 built (data/traces/gorkha.trace.json, location-only), smoke passes; no plan or survey yet, nothing historic drawn. docs/research/gorkha-pass.md

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/nepal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
