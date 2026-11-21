# Badum Tower

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `badum-tower-q3533275` |
| Coordinates | 40.32198, 0.36309 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.32198/0.36309)) |
| Wikidata | [Q3533275](https://www.wikidata.org/wiki/Q3533275) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower |
| Administrative area | Peníscola |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 17 elements (outline 1, marker 1, coastline 1, road 10, waterway 2, pit 1, water 1).

Evidence: documented 0, mapped 17, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/572387778 historic=yes 0 m from ledger point
- sea-0: DEM check ok {"cells":129,"medianInside":0,"medianOutside":35.2}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.32198/0.36309) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower; sitelinks=5; wikidata:Q3533275 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 17 elements); data/traces/badum-tower-q3533275.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
