# Casa fortificada

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-fortificada-q97285129` |
| Coordinates | 38.84201, 0.01016 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.84201/0.01016)) |
| Wikidata | [Q97285129](https://www.wikidata.org/wiki/Q97285129) (CC0) |
| Wikidata class | fort |
| Types | fortified house |
| Administrative area | El Verger |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `website` | https://www.elverger.es/la-casa-del-trapig/ |

## What the model contains

Tier **T1**, status `outline+walls`, 215 elements (outline 1, road 72, building 413, waterway 1, water 1, wall 13, retaining-wall 6, zone 1).

Evidence: documented 0, mapped 215, inferred 0, derived 0; heights documented 1, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/675769041 historic=archaeological_site 444 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 413 mapped (trace size budget); the rest of the town is not drawn
- origin moved 441 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.84201/0.01016) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house; sitelinks=1; wikidata:Q97285129 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 215 elements); data/traces/casa-fortificada-q97285129.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
