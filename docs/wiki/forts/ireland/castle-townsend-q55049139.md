# Castle Townsend

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-townsend-q55049139` |
| Coordinates | 51.52941, -9.17289 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.52941/-9.17289)) |
| Wikidata | [Q55049139](https://www.wikidata.org/wiki/Q55049139) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately home |
| Administrative area | County Cork |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `website` | https://castle-townshend.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 94 elements (outline 1, marker 2, coastline 7, road 28, wall 7, building 47, water 2).

Evidence: documented 0, mapped 94, inferred 0, derived 2; heights documented 3, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/438611706 historic=castle Q55049139 20 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":105,"medianInside":9.1,"medianOutside":23.8}
- sea-1: DEM check failed {"cells":1,"medianInside":10.8,"medianOutside":22.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.52941/-9.17289) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately home; sitelinks=2; wikidata:Q55049139 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 94 elements); data/traces/castle-townsend-q55049139.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
