# Fort de l'Olive

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-l-olive-q3078317` |
| Coordinates | 44.9975, 6.64611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.9975/6.64611)) |
| Wikidata | [Q3078317](https://www.wikidata.org/wiki/Q3078317) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Briançon |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 53 elements (outline 1, zone 3, building 3, road 27, retaining-wall 15, cliff 2, wall 1, waterway 1).

Evidence: documented 0, mapped 53, inferred 0, derived 0; heights documented 1, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/123268843 historic=fort Q3078317 43 m from ledger point
- origin moved 43 m from the ledger point to the centre of the mapped site
- 424 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.9975/6.64611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3078317 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 53 elements); data/traces/fort-de-l-olive-q3078317.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
