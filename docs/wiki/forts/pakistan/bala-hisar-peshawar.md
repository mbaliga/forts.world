# Bala Hisar, Peshawar

> Pakistan · Khyber Pakhtunkhwa · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bala-hisar-peshawar` |
| Coordinates | 34.012778, 71.569722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.012778/71.569722)) |
| Programme catalogue | confidence high, significance rank 379; sources catalogue:bala-hisar-peshawar;wikidata:Q3696263;smith-newton:r21 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 108 elements (outline 1, road 56, building 41, wall 1, zone 9).

Evidence: documented 0, mapped 108, inferred 0, derived 0; heights documented 0, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11550518 historic=fort 30 m from ledger point
- origin moved 38 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.012778/71.569722) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/bala-hisar-peshawar-pass.md](../../../research/bala-hisar-peshawar-pass.md)

## Ledger note

data/traces/bala-hisar-peshawar.trace.json (auto-T1, 2026-11-15); docs/research/bala-hisar-peshawar-pass.md. location-only; no OSM data returned (meta osm:false), 0 elements. T2 needs: OSM re-fetch (empty vs failed), plan or survey of Sikh/British walls, bastion and wall heights, present enclosure extent. Alpha-W batch seq 3 (B), 2026-11-11: chosen by user, see batch-alpha-W.csv. \| 2026-11-18: the first OSM fetch (2026-11-11) had returned nothing; OSM re-fetched with the same query and 1000 m radius (1482 elements), terrain tiles unchanged, auto-T1 rebuilt (outline+walls, 108 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
