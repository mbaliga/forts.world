# Castillo San Miguel de Agüi

> Chile · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-san-miguel-de-agui-q5870503` |
| Coordinates | -41.82951, -73.85538 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-41.82951/-73.85538)) |
| Wikidata | [Q5870503](https://www.wikidata.org/wiki/Q5870503) (CC0) |
| Wikidata class | fort |
| Types | fort\|cultural property |
| Administrative area | Ancud |
| Inception | 1779 |
| Designations | Historical Monument of Chile |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 27 elements (outline 1, marker 15, coastline 2, road 5, building 2, retaining-wall 1, water 1).

Evidence: documented 0, mapped 27, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/209226316 historic=fort Q5870503 21 m from ledger point
- island ring (1795 m2) cut out of sea-0
- origin moved 19 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":308,"medianInside":4.6,"medianOutside":14}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-41.82951/-73.85538) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|cultural property; sitelinks=3; wikidata:Q5870503 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 27 elements); data/traces/castillo-san-miguel-de-agui-q5870503.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/chile.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
