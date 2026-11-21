# Castro of Punta Neixón

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castro-of-punta-neixon-q20550673` |
| Coordinates | 42.66384, -8.84268 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.66384/-8.84268)) |
| Wikidata | [Q20550673](https://www.wikidata.org/wiki/Q20550673) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|hillfort |
| Administrative area | Cespón, Boiro |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 18 elements (outline 1, zone 4, road 10, coastline 1, building 1, water 1).

Evidence: documented 0, mapped 18, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1537692895 historic=archaeological_site Q20550673 115 m from ledger point
- origin moved 122 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1391,"medianInside":0,"medianOutside":16.2}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.66384/-8.84268) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|hillfort; sitelinks=3; wikidata:Q20550673 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 18 elements); data/traces/castro-of-punta-neixon-q20550673.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
