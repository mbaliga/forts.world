# portal de France

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portal-de-france-q16964763` |
| Coordinates | 42.4856, 2.7471 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.4856/2.7471)) |
| Wikidata | [Q16964763](https://www.wikidata.org/wiki/Q16964763) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Céret |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 260 elements (outline 1, marker 2, road 126, zone 2, building 833, retaining-wall 1, waterway 8).

Evidence: documented 0, mapped 260, inferred 0, derived 0; heights documented 24, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/120244442 historic=ruins 163 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 833 mapped (trace size budget); the rest of the town is not drawn
- origin moved 164 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.4856/2.7471) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q16964763 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 260 elements); data/traces/portal-de-france-q16964763.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
