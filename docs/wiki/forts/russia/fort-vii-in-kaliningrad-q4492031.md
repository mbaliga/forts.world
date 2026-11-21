# Fort VII in Kaliningrad

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-vii-in-kaliningrad-q4492031` |
| Coordinates | 54.6937, 20.3879 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.6937/20.3879)) |
| Wikidata | [Q4492031](https://www.wikidata.org/wiki/Q4492031) (CC0) |
| Wikidata class | fort |
| Types | fort\|architectural landmark |
| Administrative area | Kaliningrad |
| Inception | 1887 |
| Designations | regional cultural heritage site in Russia |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 46 elements (outline 1, water 3, road 10, waterway 2, building 28, coastline 2).

Evidence: documented 0, mapped 46, inferred 0, derived 1; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/90117958 historic=fort Q4492031 16 m from ledger point
- origin moved 28 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":14,"medianInside":-2.8,"medianOutside":0.7}
- 68 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.6937/20.3879) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|architectural landmark; sitelinks=2; wikidata:Q4492031 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 46 elements); data/traces/fort-vii-in-kaliningrad-q4492031.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
