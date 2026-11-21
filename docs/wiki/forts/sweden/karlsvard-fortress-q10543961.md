# Karlsvärd Fortress

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `karlsvard-fortress-q10543961` |
| Coordinates | 57.69549, 18.82117 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.69549/18.82117)) |
| Wikidata | [Q10543961](https://www.wikidata.org/wiki/Q10543961) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|architectural ensemble |
| Administrative area | Region Gotland |
| Inception | 1858 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 10 elements (outline 1, coastline 4, building 3, water 2).

Evidence: documented 0, mapped 10, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/294889377 historic=archaeological_site Q10543961 7 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":237,"medianInside":-0.5,"medianOutside":4.3}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.69549/18.82117) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|architectural ensemble; sitelinks=2; wikidata:Q10543961 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 10 elements); data/traces/karlsvard-fortress-q10543961.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
