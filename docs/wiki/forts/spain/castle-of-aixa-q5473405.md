# Castle of Aixa

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-aixa-q5473405` |
| Coordinates | 38.76451, -0.0011 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.76451/-0.0011)) |
| Wikidata | [Q5473405](https://www.wikidata.org/wiki/Q5473405) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Alcalalí |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 18 elements (outline 1, road 11, zone 3, cliff 2, wall 1).

Evidence: documented 0, mapped 18, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/392727885 historic=castle Q5473405 21 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.76451/-0.0011) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q5473405 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 18 elements); data/traces/castle-of-aixa-q5473405.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
