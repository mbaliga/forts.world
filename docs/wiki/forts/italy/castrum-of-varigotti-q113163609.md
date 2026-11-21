# Castrum of Varigotti

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castrum-of-varigotti-q113163609` |
| Coordinates | 44.18177, 8.40693 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.18177/8.40693)) |
| Wikidata | [Q113163609](https://www.wikidata.org/wiki/Q113163609) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Finale Ligure |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 241 elements (outline 1, marker 1, road 77, coastline 1, building 152, zone 1, waterway 6, water 2).

Evidence: documented 0, mapped 241, inferred 0, derived 2; heights documented 0, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/142820637 historic=ruins 243 m from ledger point
- origin moved 241 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":6,"medianInside":0.1,"medianOutside":19.7}
- sea-1: DEM check ok {"cells":7,"medianInside":0,"medianOutside":19.8}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.18177/8.40693) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=1; wikidata:Q113163609 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 241 elements); data/traces/castrum-of-varigotti-q113163609.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
