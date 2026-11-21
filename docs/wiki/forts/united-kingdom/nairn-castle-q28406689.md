# Nairn Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nairn-castle-q28406689` |
| Coordinates | 57.58333, -3.86667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.58333/-3.86667)) |
| Wikidata | [Q28406689](https://www.wikidata.org/wiki/Q28406689) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Highland |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 220 elements (outline 1, coastline 1, road 79, waterway 1, zone 9, building 128, wall 1).

Evidence: documented 0, mapped 220, inferred 0, derived 0; heights documented 0, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/906905632 historic=ruins 78 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 80 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.58333/-3.86667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q28406689 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 220 elements); data/traces/nairn-castle-q28406689.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
