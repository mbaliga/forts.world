# Kalinjar

> India · Uttar Pradesh · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kalinjar` |
| Coordinates | 24.9997, 80.4852 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.9997/80.4852)) |
| Wikidata | [Q3630997](https://www.wikidata.org/wiki/Q3630997) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Banda district |
| Designations | Monument of National Importance |
| Wikipedia language editions | 22 |
| Programme catalogue | confidence high, significance rank 193; sources catalogue:kalinjar;wikidata:Q3630997;smith-newton:r3155 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, road 15, wall 9, water 2, zone 10, building 9).

Evidence: documented 0, mapped 46, inferred 0, derived 0; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/364730591 historic=castle Q3630997 206 m from ledger point
- origin moved 177 m from the ledger point to the centre of the mapped site
- 91 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.9997/80.4852) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

coords from wikidata (was 25.006,80.485) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/kalinjar.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
