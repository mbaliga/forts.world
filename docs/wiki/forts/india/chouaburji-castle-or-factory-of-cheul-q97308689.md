# Chouaburji-Castle or Factory of Cheul

> India · Raigad district · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chouaburji-castle-or-factory-of-cheul-q97308689` |
| Coordinates | 18.545576, 72.928276 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.545576/72.928276)) |
| Wikidata | [Q97308689](https://www.wikidata.org/wiki/Q97308689) (CC0) |
| Programme catalogue | confidence medium, significance rank 2159; sources wikidata:Q97308689 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 8 elements (outline 1, road 3, waterway 1, coastline 1, water 1).

Evidence: documented 0, mapped 8, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/658563498 historic=fort Q24909257 255 m from ledger point
- origin moved 249 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1474,"medianInside":0.9,"medianOutside":11.5}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.545576/72.928276) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=medium; rank=2159; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline+walls, 8 elements); data/traces/chouaburji-castle-or-factory-of-cheul-q97308689.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
