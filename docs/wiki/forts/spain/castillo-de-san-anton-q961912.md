# Castillo de San Antón

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-anton-q961912` |
| Coordinates | 43.36577, -8.38778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.36577/-8.38778)) |
| Wikidata | [Q961912](https://www.wikidata.org/wiki/Q961912) (CC0) |
| Wikidata class | fort |
| Types | fort\|monument |
| Administrative area | A Coruña |
| Designations | bien de interés cultural |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.coruna.gal/cultura/gl/espazos/detalle-para-entidade/museo-arqueoloxico-castelo-de-san-anton/entidad/1149055937727 |

## What the model contains

Tier **T1**, status `outline+walls`, 62 elements (outline 1, marker 5, coastline 3, road 32, building 1, zone 17, wall 2, water 1).

Evidence: documented 0, mapped 62, inferred 0, derived 1; heights documented 2, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10430576 historic=castle Q961912 6 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1548,"medianInside":0,"medianOutside":4.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.36577/-8.38778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|monument; sitelinks=8; wikidata:Q961912 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 62 elements); data/traces/castillo-de-san-anton-q961912.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
