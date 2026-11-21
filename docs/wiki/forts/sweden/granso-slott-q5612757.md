# Gränsö Slott

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `granso-slott-q5612757` |
| Coordinates | 57.76111, 16.68413 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.76111/16.68413)) |
| Wikidata | [Q5612757](https://www.wikidata.org/wiki/Q5612757) (CC0) |
| Wikidata class | castle |
| Types | castle\|building |
| Administrative area | Västervik Municipality |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 48 elements (outline 1, road 20, coastline 2, zone 1, building 22, water 2).

Evidence: documented 0, mapped 48, inferred 0, derived 2; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1097232840 historic=castle Q5612757 13 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":70,"medianInside":2.2,"medianOutside":9.4}
- sea-1: DEM check failed {"cells":388,"medianInside":8.8,"medianOutside":8.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.76111/16.68413) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|building; sitelinks=5; wikidata:Q5612757 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 48 elements); data/traces/granso-slott-q5612757.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
