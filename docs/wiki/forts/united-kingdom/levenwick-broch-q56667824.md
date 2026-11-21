# Levenwick Broch

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `levenwick-broch-q56667824` |
| Coordinates | 59.96009, -1.25767 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.96009/-1.25767)) |
| Wikidata | [Q56667824](https://www.wikidata.org/wiki/Q56667824) (CC0) |
| Wikidata class | fortification |
| Types | broch |
| Administrative area | Shetland Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 6 elements (outline 1, coastline 1, water 3, waterway 1).

Evidence: documented 0, mapped 6, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1385610576 historic=archaeological_site Q56667824 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":75,"medianInside":3.5,"medianOutside":16}
- sea-1: DEM check failed {"cells":7,"medianInside":16,"medianOutside":13.6}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.96009/-1.25767) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch; sitelinks=2; wikidata:Q56667824 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 6 elements); data/traces/levenwick-broch-q56667824.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
