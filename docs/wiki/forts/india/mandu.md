# Mandu

> India · Madhya Pradesh · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mandu` |
| Coordinates | 22.341684, 75.400572 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.341684/75.400572)) |
| Programme catalogue | confidence medium, significance rank 3191; sources catalogue:mandu;smith-newton:r1415 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 12 elements (outline 1, road 4, zone 4, wall 1, building 2).

Evidence: documented 0, mapped 12, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/597770750 historic=fort 769 m from ledger point
- origin moved 768 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.341684/75.400572) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Research notes

- [docs/research/mandu-coordinate-registration-pass-2.md](../../../research/mandu-coordinate-registration-pass-2.md)
- [docs/research/mandu-coordinate-registration-pass.md](../../../research/mandu-coordinate-registration-pass.md)
- [docs/research/mandu-water-site-registration.md](../../../research/mandu-water-site-registration.md)

## Ledger note

coords from smith-newton (was 22.336,75.396) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 12 elements); data/traces/mandu.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
