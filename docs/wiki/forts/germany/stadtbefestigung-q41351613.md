# Stadtbefestigung

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-q41351613` |
| Coordinates | 49.73927, 10.16412 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.73927/10.16412)) |
| Wikidata | [Q41351613](https://www.wikidata.org/wiki/Q41351613) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Kitzingen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | yes |
| OSM `description` | Befestigungsturm der inneren Stadtmauer |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 14, road 126, building 396, zone 4, retaining-wall 6, waterway 2, wall 6).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 1, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/242613487 historic=yes 167 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 396 mapped (trace size budget); the rest of the town is not drawn
- origin moved 167 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.73927/10.16412) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q41351613 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 279 elements); data/traces/stadtbefestigung-q41351613.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
