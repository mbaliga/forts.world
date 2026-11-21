# Ranikot

> Pakistan · Sindh · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ranikot` |
| Coordinates | 25.883056, 67.932222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.883056/67.932222)) |
| Programme catalogue | confidence high, significance rank 261; sources catalogue:ranikot;wikidata:Q2131024;osm:w416605214;smith-newton:r30 |

## What the model contains

Tier **T1**, status `location-only`, 8 elements (marker 1, road 4, wall 2, waterway 1).

Evidence: documented 0, mapped 8, inferred 0, derived 0; heights documented 2, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.883056/67.932222) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/ranikot-pass.md](../../../research/ranikot-pass.md)

## Ledger note

data/traces/ranikot.trace.json (auto-T1, 2026-11-15); docs/research/ranikot-pass.md. location-only; Sann Gate marker, 2 wall ways, 1 stream, 4 roads (window widened to 800 m half-width, stride 10). T2 needs: wall circuit (survey or satellite trace), wall height and thickness, Mohan/Shahper/Amri gate positions, Miri and Shergarh footprints. Alpha-W batch seq 9 (R), 2026-11-11: chosen by user, see batch-alpha-W.csv.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
