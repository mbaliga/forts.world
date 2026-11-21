# Handa Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `handa-castle-q11407046` |
| Coordinates | 34.89644, 136.93033 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.89644/136.93033)) |
| Wikidata | [Q11407046](https://www.wikidata.org/wiki/Q11407046) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 1, waterway 4, water 2, road 100, building 230, wall 3, zone 1).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 1, inferred 0, unknown 232.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/670221425 historic=building Q123527435 431 m from ledger point
- origin moved 431 m from the ledger point to the centre of the mapped site
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.89644/136.93033) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q11407046 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/handa-castle-q11407046.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
