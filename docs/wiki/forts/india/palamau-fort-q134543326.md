# Palamau Fort

> India · Latehar district, Jharkhand · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palamau-fort-q134543326` |
| Coordinates | 23.894722, 84.232778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.894722/84.232778)) |
| Wikidata | [Q134543326](https://www.wikidata.org/wiki/Q134543326) (CC0) |
| Programme catalogue | confidence high, significance rank 863; sources wikidata:Q134543326;smith-newton:r885;smith-newton:r886 |

## What the model contains

Tier **T1**, status `location-only`, 12 elements (waterway 1, water 3, road 5, building 1, wall 2).

Evidence: documented 0, mapped 12, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.894722/84.232778) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/palamau-fort-q134543326-pass.md](../../../research/palamau-fort-q134543326-pass.md)

## Ledger note

data/traces/palamau-fort-q134543326.trace.json (auto-T1, 2026-11-15); docs/research/palamau-fort-q134543326-pass.md. location-only; 0 elements, no OSM data. T2 needs: which of the two forts the point marks, coordinates for each, the 1904 ASI report plan, gate positions, rampart heights. Alpha-W batch seq 8 (P), 2026-11-11: chosen by user, see batch-alpha-W.csv. \| 2026-11-18: the first OSM fetch (2026-11-11) had returned nothing; OSM re-fetched with the same query and 1000 m radius (42 elements), terrain tiles unchanged, auto-T1 rebuilt (location-only, 12 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
