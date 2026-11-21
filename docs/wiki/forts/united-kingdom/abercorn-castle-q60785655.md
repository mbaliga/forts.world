# Abercorn Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `abercorn-castle-q60785655` |
| Coordinates | 55.99772, -3.47206 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.99772/-3.47206)) |
| Wikidata | [Q60785655](https://www.wikidata.org/wiki/Q60785655) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | West Lothian |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, marker 2, coastline 1, road 29, waterway 2, building 3, zone 1, wall 7).

Evidence: documented 0, mapped 46, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/710899682 historic=ruins 105 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 102 m from the ledger point to the outline centroid
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.99772/-3.47206) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q60785655 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/abercorn-castle-q60785655.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
