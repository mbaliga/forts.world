# Torre di Albori

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-di-albori-q113452146` |
| Coordinates | 40.66436, 14.71624 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.66436/14.71624)) |
| Wikidata | [Q113452146](https://www.wikidata.org/wiki/Q113452146) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Vietri sul Mare |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 34 elements (outline 1, road 8, coastline 4, zone 2, waterway 1, building 17, water 1).

Evidence: documented 0, mapped 34, inferred 0, derived 1; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/191230549 historic=castle Q113452146 16 m from ledger point
- origin moved 14 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":149,"medianInside":0,"medianOutside":62.7}
- 41 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.66436/14.71624) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=0; wikidata:Q113452146 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 34 elements); data/traces/torre-di-albori-q113452146.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
