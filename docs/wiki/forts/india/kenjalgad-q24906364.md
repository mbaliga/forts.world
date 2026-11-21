# Kenjalgad

> India · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kenjalgad-q24906364` |
| Coordinates | 18.53583, 72.90806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.53583/72.90806)) |
| Wikidata | [Q24906364](https://www.wikidata.org/wiki/Q24906364) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Satara district |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 17 elements (outline 1, coastline 1, road 4, building 9, water 1).

Evidence: documented 0, mapped 17, inferred 0, derived 1; heights documented 3, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/279967536 historic=fort Q6432353 214 m from ledger point
- origin moved 227 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1413,"medianInside":0.1,"medianOutside":25}
- 315 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.53583/72.90806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q24906364; South Asia site missing from the programme (no programme row within 2 km sharing a name word) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 17 elements); data/traces/kenjalgad-q24906364.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
