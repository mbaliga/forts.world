# Castello di Punta Ala

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-punta-ala-q3662822` |
| Coordinates | 42.80224, 10.73506 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.80224/10.73506)) |
| Wikidata | [Q3662822](https://www.wikidata.org/wiki/Q3662822) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 107 elements (outline 1, road 24, building 72, coastline 2, zone 6, water 2).

Evidence: documented 0, mapped 107, inferred 0, derived 2; heights documented 69, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/114391665 historic=castle Q3662822 12 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":14,"medianInside":1,"medianOutside":15.2}
- sea-1: DEM check ok {"cells":67,"medianInside":0,"medianOutside":17.8}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.80224/10.73506) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q3662822 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 107 elements); data/traces/castello-di-punta-ala-q3662822.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
