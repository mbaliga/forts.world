# Telegraphy Gate

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `telegraphy-gate-q67181532` |
| Coordinates | 34.02497, -6.83087 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.02497/-6.83087)) |
| Wikidata | [Q67181532](https://www.wikidata.org/wiki/Q67181532) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Rabat |
| Designations | Moroccan cultural heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline+walls`, 205 elements (outline 1, marker 2, road 105, coastline 1, wall 3, building 63, zone 30).

Evidence: documented 0, mapped 205, inferred 0, derived 0; heights documented 5, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1356886208 historic=tomb 239 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 238 m from the ledger point to the centre of the mapped site
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.02497/-6.83087) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q67181532 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 205 elements); data/traces/telegraphy-gate-q67181532.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
