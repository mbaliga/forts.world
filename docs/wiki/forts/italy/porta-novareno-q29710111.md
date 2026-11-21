# Porta Novareno

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-novareno-q29710111` |
| Coordinates | 46.04398, 9.30556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.04398/9.30556)) |
| Wikidata | [Q29710111](https://www.wikidata.org/wiki/Q29710111) (CC0) |
| Wikidata class | fort |
| Types | fortification\|city gate |
| Administrative area | Bellano |
| Inception | 1500 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 153 elements (marker 4, road 88, zone 5, building 52, retaining-wall 1, wall 3).

Evidence: documented 0, mapped 153, inferred 0, derived 0; heights documented 0, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11556660 historic=yes Q29708551 199 m from ledger point
- site is a site relation of 2 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (84 x 82 m)
- origin moved 190 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.04398/9.30556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|city gate; sitelinks=1; wikidata:Q29710111 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 153 elements); data/traces/porta-novareno-q29710111.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
