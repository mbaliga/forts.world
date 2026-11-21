# Buncrana Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `buncrana-castle-q55049218` |
| Coordinates | 55.13964, -7.46413 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.13964/-7.46413)) |
| Wikidata | [Q55049218](https://www.wikidata.org/wiki/Q55049218) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately home |
| Administrative area | County Donegal |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 32 elements (outline 1, road 14, building 6, waterway 3, coastline 1, wall 4, zone 2, water 1).

Evidence: documented 0, mapped 32, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1061540494 historic=castle Q55049218 3 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":31,"medianInside":0,"medianOutside":8.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.13964/-7.46413) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately home; sitelinks=1; wikidata:Q55049218 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 32 elements); data/traces/buncrana-castle-q55049218.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
