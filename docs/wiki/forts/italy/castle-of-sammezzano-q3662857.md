# Castle of Sammezzano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-sammezzano-q3662857` |
| Coordinates | 43.70283, 11.4718 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.70283/11.4718)) |
| Wikidata | [Q3662857](https://www.wikidata.org/wiki/Q3662857) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|château |
| Administrative area | Reggello |
| Inception | 1885 |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Costruzione eclettica in stile moresco, effetto della ristrutturazione ottocentesca di una grande fattoria edificata nel 1605 per volere della famiglia Ximenes D'Aragona. Ha assunto l’aspetto attuale grazie all’opera del marchese Ferdinando Panciatichi. |

## What the model contains

Tier **T1**, status `outline+walls`, 103 elements (outline 1, marker 1, road 56, building 11, wall 15, zone 5, waterway 10, cliff 4).

Evidence: documented 0, mapped 103, inferred 0, derived 0; heights documented 2, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/149081615 historic=castle Q3662857 5 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.70283/11.4718) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|château; sitelinks=16; wikidata:Q3662857 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 103 elements); data/traces/castle-of-sammezzano-q3662857.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
