# Donjon van Batsheers

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donjon-van-batsheers-q19838260` |
| Coordinates | 50.7366, 5.28046 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7366/5.28046)) |
| Wikidata | [Q19838260](https://www.wikidata.org/wiki/Q19838260) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Heers |
| Designations | beschermd monument |
| Wikipedia language editions | 1 |
| OSM `historic` | tower |

## What the model contains

Tier **T1**, status `outline-only`, 88 elements (outline 1, road 14, building 57, zone 16).

Evidence: documented 0, mapped 88, inferred 0, derived 0; heights documented 0, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/816913833 historic=tower Q19838260 16 m from ledger point
- origin moved 17 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7366/5.28046) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=1; wikidata:Q19838260 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 98 elements); data/traces/donjon-van-batsheers-q19838260.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 88 elements; outline osm:way/816913833 historic=tower Q19838260 16 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
