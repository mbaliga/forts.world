# Estergon Castle (Ankara)

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `estergon-castle-ankara-q991449` |
| Coordinates | 39.98069, 32.86639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.98069/32.86639)) |
| Wikidata | [Q991449](https://www.wikidata.org/wiki/Q991449) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Ankara |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 88 elements (outline 1, road 28, building 58, water 1).

Evidence: documented 0, mapped 88, inferred 0, derived 0; heights documented 3, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/414061005 historic=castle Q991449 11 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.98069/32.86639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q991449 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 88 elements); data/traces/estergon-castle-ankara-q991449.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
