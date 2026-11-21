# Torre de la Móra

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-la-mora-q18008426` |
| Coordinates | 41.12583, 1.34192 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.12583/1.34192)) |
| Wikidata | [Q18008426](https://www.wikidata.org/wiki/Q18008426) (CC0) |
| Wikidata class | castle |
| Types | castle\|watchtower |
| Administrative area | Tarragona |
| Inception | 1600 |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 43 elements (outline 1, coastline 4, road 35, building 2, water 1).

Evidence: documented 0, mapped 43, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/181323176 historic=castle Q18008426 0 m from ledger point
- sea-0: DEM check ok {"cells":218,"medianInside":0,"medianOutside":10.3}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.12583/1.34192) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|watchtower; sitelinks=2; wikidata:Q18008426 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 43 elements); data/traces/torre-de-la-mora-q18008426.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
