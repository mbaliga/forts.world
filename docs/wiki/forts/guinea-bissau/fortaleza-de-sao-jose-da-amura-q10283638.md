# Fortaleza de São José da Amura

> Guinea-Bissau · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortaleza-de-sao-jose-da-amura-q10283638` |
| Coordinates | 11.86027, -15.57861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/11.86027/-15.57861)) |
| Wikidata | [Q10283638](https://www.wikidata.org/wiki/Q10283638) (CC0) |
| Wikidata class | fort |
| Types | fort\|fortress\|cultural heritage |
| Administrative area | Bissau |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 6 |
| OSM `historic` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, marker 19, road 71, building 174, zone 2, coastline 2, wall 7, water 1).

Evidence: documented 0, mapped 278, inferred 0, derived 1; heights documented 0, inferred 0, unknown 182.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/94952889 historic=yes 24 m from ledger point
- origin moved 19 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":75,"medianInside":7,"medianOutside":14.8}
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/11.86027/-15.57861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fortress\|cultural heritage; sitelinks=6; wikidata:Q10283638 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 278 elements); data/traces/fortaleza-de-sao-jose-da-amura-q10283638.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/guinea-bissau.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
