# Dough Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dough-castle-q16962510` |
| Coordinates | 52.94663, -9.34923 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.94663/-9.34923)) |
| Wikidata | [Q16962510](https://www.wikidata.org/wiki/Q16962510) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin\|tower house |
| Wikipedia language editions | 5 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 13 elements (outline 1, road 5, coastline 3, waterway 2, water 2).

Evidence: documented 0, mapped 13, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/317257142 historic=ruins Q16962510 1 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":83,"medianInside":2.9,"medianOutside":2}
- sea-1: DEM check failed {"cells":394,"medianInside":2.3,"medianOutside":1.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.94663/-9.34923) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin\|tower house; sitelinks=5; wikidata:Q16962510 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 13 elements); data/traces/dough-castle-q16962510.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
