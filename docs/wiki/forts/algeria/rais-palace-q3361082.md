# Rais Palace

> Algeria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rais-palace-q3361082` |
| Coordinates | 36.78828, 3.06398 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.78828/3.06398)) |
| Wikidata | [Q3361082](https://www.wikidata.org/wiki/Q3361082) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|museum |
| Administrative area | Algiers Province |
| Inception | 1576 |
| Designations | part of UNESCO World Heritage Site |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://bloom-communication.dz/Bastion23/index.php/fr/palais-des-rais/ |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 8, road 243, coastline 2, zone 27, building 87, retaining-wall 17, wall 26, water 3).

Evidence: documented 0, mapped 321, inferred 0, derived 1; heights documented 8, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6724867 historic=castle Q3361082 6 m from ledger point
- roads capped: kept the 150 longest of 243 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":75,"medianInside":0.6,"medianOutside":14.8}
- 23 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.78828/3.06398) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|museum; sitelinks=10; wikidata:Q3361082 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/rais-palace-q3361082.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/algeria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
