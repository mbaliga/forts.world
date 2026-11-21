# Torre del Verger

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-verger-q18008271` |
| Coordinates | 39.6837, 2.50003 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.6837/2.50003)) |
| Wikidata | [Q18008271](https://www.wikidata.org/wiki/Q18008271) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower |
| Administrative area | Banyalbufar |
| Inception | 1600 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 50 elements (outline 1, coastline 1, road 10, water 5, cliff 3, retaining-wall 25, building 5).

Evidence: documented 0, mapped 50, inferred 0, derived 1; heights documented 0, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/307781617 historic=castle Q18008271 0 m from ledger point
- sea-0: DEM check ok {"cells":56,"medianInside":0,"medianOutside":105.8}
- 26 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.6837/2.50003) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower; sitelinks=3; wikidata:Q18008271 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 50 elements); data/traces/torre-del-verger-q18008271.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
