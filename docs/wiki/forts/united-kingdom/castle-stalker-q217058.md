# Castle Stalker

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-stalker-q217058` |
| Coordinates | 56.57154, -5.38619 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.57154/-5.38619)) |
| Wikidata | [Q217058](https://www.wikidata.org/wiki/Q217058) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower house |
| Administrative area | Argyll and Bute |
| Inception | 1320 |
| Designations | category A listed building |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.castlestalker.com/wp/ |

## What the model contains

Tier **T1**, status `outline-only`, 4 elements (outline 1, coastline 3).

Evidence: documented 0, mapped 4, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/276673910 historic=castle Q217058 7 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 9 m from the ledger point to the outline centroid
- 30 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.57154/-5.38619) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower house; sitelinks=18; wikidata:Q217058 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 4 elements); data/traces/castle-stalker-q217058.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
