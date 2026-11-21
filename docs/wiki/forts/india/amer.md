# Amer

> India · Rajasthan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `amer` |
| Coordinates | 26.987778, 75.849722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.987778/75.849722)) |
| Wikidata | [Q456817](https://www.wikidata.org/wiki/Q456817) (CC0) |
| Wikidata class | fort |
| Types | palace\|fortress |
| Administrative area | Jaipur district |
| Inception | 1592 |
| Designations | State Protected Monument\|part of UNESCO World Heritage Site |
| UNESCO WHC id | 247rev-005 |
| Wikipedia language editions | 45 |
| Programme catalogue | confidence high, significance rank 5; sources catalogue:amer;wikidata:Q97119521;wikidata:Q456817;wikidata:Q97119528;smith-newton:r64 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | https://whc.unesco.org/en/list/247/ |

## What the model contains

Tier **T1**, status `outline+walls`, 139 elements (outline 1, marker 7, wall 31, road 49, building 46, zone 1, retaining-wall 4).

Evidence: documented 0, mapped 139, inferred 0, derived 0; heights documented 1, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2591473 historic=castle Q456817 201 m from ledger point
- origin moved 206 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.987778/75.849722) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Research notes

- [docs/research/amer-diwan-aam-form-registration.md](../../../research/amer-diwan-aam-form-registration.md)
- [docs/research/amer-maota-kund-mapping.md](../../../research/amer-maota-kund-mapping.md)
- [docs/research/amer-pass.md](../../../research/amer-pass.md)

## Ledger note

coords from wikidata (was 26.985,75.851) Alpha-I batch (2026-11-14): 10 forts spread across A-Z starting at I, distinct from batch 0 and every other alpha batch. Research pass 1 done: docs/research/amer-pass.md. \| 2026-11-16: Commons search returned no open plan (photos only); fetch ASI/Jaipur survey drawings from archive.org next. \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 139 elements); data/traces/amer.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
