# castle of La Alameda

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-la-alameda-q8342365` |
| Coordinates | 40.45872, -3.5925 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.45872/-3.5925)) |
| Wikidata | [Q8342365](https://www.wikidata.org/wiki/Q8342365) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Madrid |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `description` | El Castillo de la Alameda o de Barajas se trata de uno de los escasos vestigios de la arquitectura militar del pasado siglo XV y uno de los pocos castillos que ha sobrevivido al paso del tiempo. |
| OSM `website` | https://www.madrid.es/vgn-ext-templating/v/index.jsp?vgnextchannel=9e4c43db40317010VgnVCM100000dc0ca8c0RCRD&vgnextoid=fe43c4be8e688210VgnVCM1000000b205a0aRCRD |

## What the model contains

Tier **T1**, status `outline+walls`, 159 elements (outline 1, marker 1, road 76, wall 6, zone 2, building 70, water 2, waterway 1).

Evidence: documented 0, mapped 159, inferred 0, derived 0; heights documented 0, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23290536 historic=castle Q8342365 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.45872/-3.5925) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=4; wikidata:Q8342365 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 159 elements); data/traces/castle-of-la-alameda-q8342365.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
