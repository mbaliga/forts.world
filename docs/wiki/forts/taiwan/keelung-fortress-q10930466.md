# Keelung Fortress

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `keelung-fortress-q10930466` |
| Coordinates | 25.14153, 121.76312 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.14153/121.76312)) |
| Wikidata | [Q10930466](https://www.wikidata.org/wiki/Q10930466) (CC0) |
| Wikidata class | fort |
| Types | fortification\|independent mixed brigade |
| Wikipedia language editions | 3 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, road 46, coastline 1, water 1, wall 3, building 17, waterway 1, zone 2).

Evidence: documented 0, mapped 72, inferred 0, derived 0; heights documented 4, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/908161721 historic=monument 77 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 73 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.14153/121.76312) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|independent mixed brigade; sitelinks=3; wikidata:Q10930466 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/keelung-fortress-q10930466.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
