# Kastellet

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastellet-q4176816` |
| Coordinates | 59.3226, 18.09015 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.3226/18.09015)) |
| Wikidata | [Q4176816](https://www.wikidata.org/wiki/Q4176816) (CC0) |
| Wikidata class | castle |
| Types | castle\|no\|building |
| Administrative area | Stockholm Municipality |
| Inception | 1667 |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline-only`, 52 elements (outline 1, road 30, coastline 3, building 13, cliff 1, zone 4).

Evidence: documented 0, mapped 52, inferred 0, derived 0; heights documented 13, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/49744847 historic=castle Q4176816 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 3 m from the ledger point to the outline centroid
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.3226/18.09015) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|no\|building; sitelinks=13; wikidata:Q4176816 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 52 elements); data/traces/kastellet-q4176816.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
