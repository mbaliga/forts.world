# Castillo del Parque Rodó

> Uruguay · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-del-parque-rodo-q123144720` |
| Coordinates | -34.91242, -56.1665 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-34.91242/-56.1665)) |
| Wikidata | [Q123144720](https://www.wikidata.org/wiki/Q123144720) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Montevideo |
| Inception | 1903 |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 1, road 64, zone 29, building 343, wall 222).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 68, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1090516533 historic=yes 407 m from ledger point
- pruned to the outline plus 150 m: 660 -> 352 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 157 mapped (trace size budget); the rest of the town is not drawn
- origin moved 408 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-34.91242/-56.1665) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q123144720 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/castillo-del-parque-rodo-q123144720.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/uruguay.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
