# Batteria Pisani

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `batteria-pisani-q113400210` |
| Coordinates | 45.45043, 12.46845 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.45043/12.46845)) |
| Wikidata | [Q113400210](https://www.wikidata.org/wiki/Q113400210) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Cavallino-Treporti |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `website` | https://www.fortificazioni.net/VENEZIA/PISANI.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 168 elements (outline 1, marker 1, road 44, building 116, coastline 1, waterway 1, wall 4).

Evidence: documented 0, mapped 168, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/177057582 historic=yes Q113400210 1 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.45043/12.46845) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=1; wikidata:Q113400210 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 168 elements); data/traces/batteria-pisani-q113400210.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
