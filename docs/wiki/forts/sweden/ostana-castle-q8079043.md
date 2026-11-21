# Östanå Castle

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ostana-castle-q8079043` |
| Coordinates | 59.55727, 18.57828 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.55727/18.57828)) |
| Wikidata | [Q8079043](https://www.wikidata.org/wiki/Q8079043) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Österåker Municipality |
| Inception | 1794 |
| Wikipedia language editions | 6 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 26 elements (outline 1, coastline 1, waterway 1, road 7, zone 5, building 11).

Evidence: documented 0, mapped 26, inferred 0, derived 0; heights documented 3, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/303293885 historic=ruins 543 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 537 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.55727/18.57828) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=6; wikidata:Q8079043 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 26 elements); data/traces/ostana-castle-q8079043.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
