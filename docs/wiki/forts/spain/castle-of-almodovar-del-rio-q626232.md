# Castle of Almodóvar del Río

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-almodovar-del-rio-q626232` |
| Coordinates | 37.80742, -5.02371 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.80742/-5.02371)) |
| Wikidata | [Q626232](https://www.wikidata.org/wiki/Q626232) (CC0) |
| Wikidata class | castle |
| Types | castle\|Roman villa\|aljibe |
| Administrative area | Almodóvar del Río |
| Designations | bien de interés cultural |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `website` | https://castillodealmodovar.com |

## What the model contains

Tier **T1**, status `outline+walls`, 24 elements (outline 1, waterway 1, road 21, wall 1).

Evidence: documented 0, mapped 24, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/184730606 historic=castle Q626232 13 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- 6889 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.80742/-5.02371) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Roman villa\|aljibe; sitelinks=14; wikidata:Q626232 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 24 elements); data/traces/castle-of-almodovar-del-rio-q626232.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
