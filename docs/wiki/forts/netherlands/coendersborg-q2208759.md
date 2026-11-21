# Coendersborg

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `coendersborg-q2208759` |
| Coordinates | 53.14824, 6.30085 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.14824/6.30085)) |
| Wikidata | [Q2208759](https://www.wikidata.org/wiki/Q2208759) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|borg |
| Administrative area | Marum |
| Inception | 1813 |
| Designations | Rijksmonument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 111 elements (outline 1, road 42, zone 49, water 2, building 17).

Evidence: documented 0, mapped 111, inferred 0, derived 0; heights documented 4, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/279050082 historic=castle Q2208759 1 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.14824/6.30085) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|borg; sitelinks=3; wikidata:Q2208759 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 111 elements); data/traces/coendersborg-q2208759.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
