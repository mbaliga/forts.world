# Khanderi

> India · Maharashtra · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `khanderi` |
| Coordinates | 18.7043, 72.8133 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.7043/72.8133)) |
| Wikidata | [Q3827817](https://www.wikidata.org/wiki/Q3827817) (CC0) |
| Wikidata class | fort |
| Types | island\|fort |
| Administrative area | Raigad district |
| Designations | part of UNESCO World Heritage Site |
| Wikipedia language editions | 13 |
| Programme catalogue | confidence high, significance rank 290; sources catalogue:khanderi;wikidata:Q3827817;smith-newton:r241 |
| OSM `historic` | fort |
| OSM `heritage` | https://whc.unesco.org/en/list/1739 |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, coastline 1, road 6, building 3).

Evidence: documented 0, mapped 11, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/281255137 historic=fort Q3827817 20 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 24 m from the ledger point to the outline centroid
- 33 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.7043/72.8133) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/khanderi-island-mapped-pass.md](../../../research/khanderi-island-mapped-pass.md)
- [docs/research/khanderi-pass.md](../../../research/khanderi-pass.md)

## Ledger note

data/traces/khanderi.trace.json (auto-T1, 2026-11-15); docs/research/khanderi-pass.md. outline-only; 1 outline (about 6.0 ha), coastline, 3 buildings, 6 roads. T2 needs: island plan, bastion and gate positions, wall heights, lighthouse height from DGLL, positions of wells, Betal temple and Daud Pir tomb. Alpha-W batch seq 6 (K), 2026-11-11: chosen by user, see batch-alpha-W.csv.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
