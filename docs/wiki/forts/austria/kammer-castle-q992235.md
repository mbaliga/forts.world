# Kammer Castle

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kammer-castle-q992235` |
| Coordinates | 47.94608, 13.59127 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.94608/13.59127)) |
| Wikidata | [Q992235](https://www.wikidata.org/wiki/Q992235) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Schörfling am Attersee |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Schlosskonzerte |
| OSM `website` | http://www.burgen-austria.com/Archiv.asp?Artikel=Kammer |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, marker 2, waterway 1, road 39, building 8, wall 9, zone 12).

Evidence: documented 0, mapped 72, inferred 0, derived 0; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4779571 historic=castle Q992235 11 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.94608/13.59127) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=4; wikidata:Q992235 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/kammer-castle-q992235.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
