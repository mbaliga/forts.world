# Casa do Conde São Salvador

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-do-conde-sao-salvador-q123786363` |
| Coordinates | 41.18762, -8.69045 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.18762/-8.69045)) |
| Wikidata | [Q123786363](https://www.wikidata.org/wiki/Q123786363) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|building\|cultural heritage\|mansion |
| Administrative area | Matosinhos e Leça da Palmeira |
| Designations | heritage without legal protection |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 392 elements (outline 1, marker 1, road 145, wall 112, building 211, zone 9, waterway 1, retaining-wall 3).

Evidence: documented 0, mapped 392, inferred 0, derived 0; heights documented 66, inferred 0, unknown 169.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1234272721 historic=castle Q123786363 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 211 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.18762/-8.69045) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|building\|cultural heritage\|mansion; sitelinks=0; wikidata:Q123786363 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 392 elements); data/traces/casa-do-conde-sao-salvador-q123786363.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
