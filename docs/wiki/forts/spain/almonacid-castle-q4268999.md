# Almonacid Castle

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `almonacid-castle-q4268999` |
| Coordinates | 39.9047, -0.44703 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.9047/-0.44703)) |
| Wikidata | [Q4268999](https://www.wikidata.org/wiki/Q4268999) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Vall de Almonacid |
| Designations | Red List of Endangered Heritage item\|bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 40 elements (outline 1, road 12, waterway 1, wall 3, zone 2, retaining-wall 21).

Evidence: documented 0, mapped 40, inferred 0, derived 0; heights documented 0, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/986630346 historic=castle Q4268999 31 m from ledger point
- origin moved 31 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.9047/-0.44703) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=4; wikidata:Q4268999 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 40 elements); data/traces/almonacid-castle-q4268999.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
