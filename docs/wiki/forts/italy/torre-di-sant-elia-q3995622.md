# Torre di Sant'Elia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-di-sant-elia-q3995622` |
| Coordinates | 39.18794, 9.16561 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.18794/9.16561)) |
| Wikidata | [Q3995622](https://www.wikidata.org/wiki/Q3995622) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Cagliari |
| Inception | 1282 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 31 elements (outline 1, marker 1, cliff 2, road 19, zone 5, coastline 1, building 1, water 1).

Evidence: documented 0, mapped 31, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/742160192 historic=ruins 13 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":26,"medianInside":0.3,"medianOutside":94.3}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.18794/9.16561) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=2; wikidata:Q3995622 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 31 elements); data/traces/torre-di-sant-elia-q3995622.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
