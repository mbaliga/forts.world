# Castillo Íllora

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-illora-q5757763` |
| Coordinates | 37.28609, -3.88006 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.28609/-3.88006)) |
| Wikidata | [Q5757763](https://www.wikidata.org/wiki/Q5757763) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Íllora |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.turismodeillora.com/es/patrimonio/castillo-de-llora.html |

## What the model contains

Tier **T1**, status `outline+walls`, 105 elements (outline 1, road 75, cliff 1, building 25, wall 1, zone 2).

Evidence: documented 0, mapped 105, inferred 0, derived 0; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/468312903 historic=castle Q5757763 23 m from ledger point
- origin moved 22 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.28609/-3.88006) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=1; wikidata:Q5757763 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 105 elements); data/traces/castillo-illora-q5757763.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
