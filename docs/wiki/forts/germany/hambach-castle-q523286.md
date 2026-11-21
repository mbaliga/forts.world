# Hambach Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hambach-castle-q523286` |
| Coordinates | 49.325, 8.11861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.325/8.11861)) |
| Wikidata | [Q523286](https://www.wikidata.org/wiki/Q523286) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Neustadt an der Weinstraße |
| Inception | 1100 |
| Designations | cultural heritage monument in Rhineland-Palatinate |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 111 elements (outline 1, marker 5, road 69, building 7, zone 3, retaining-wall 5, wall 20, waterway 1).

Evidence: documented 0, mapped 111, inferred 0, derived 0; heights documented 1, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1208273825 historic=castle 30 m from ledger point
- origin moved 30 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.325/8.11861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=18; wikidata:Q523286 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 111 elements); data/traces/hambach-castle-q523286.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
