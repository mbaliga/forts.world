# Penghu Island Fortress

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `penghu-island-fortress-q11565819` |
| Coordinates | 23.5659, 119.56232 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/23.5659/119.56232)) |
| Wikidata | [Q11565819](https://www.wikidata.org/wiki/Q11565819) (CC0) |
| Wikidata class | fort |
| Types | fortification\|independent mixed brigade |
| Administrative area | Magong City |
| Wikipedia language editions | 3 |
| OSM `historic` | temple |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 92 elements (outline 1, marker 2, coastline 2, road 60, wall 2, building 25).

Evidence: documented 0, mapped 92, inferred 0, derived 0; heights documented 5, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/330868213 historic=temple Q15904328 213 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 218 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/23.5659/119.56232) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|independent mixed brigade; sitelinks=3; wikidata:Q11565819 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 92 elements); data/traces/penghu-island-fortress-q11565819.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
