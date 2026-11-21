# Royal Palace of Naples

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `royal-palace-of-naples-q426339` |
| Coordinates | 40.83646, 14.25057 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.83646/14.25057)) |
| Wikidata | [Q426339](https://www.wikidata.org/wiki/Q426339) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|art museum\|historic house museum\|Italian national museum\|history museum\|art collection\|royal palace\|religious museum\|palazzo museum\|Istituto museale ad autonomia speciale\|Museum of the Italian Ministry of Culture |
| Administrative area | Naples |
| Inception | 1600 |
| Designations | Italian national heritage |
| Wikipedia language editions | 30 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://palazzorealedinapoli.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 10, coastline 1, road 307, building 180, wall 9, zone 17, retaining-wall 12, water 4).

Evidence: documented 0, mapped 324, inferred 0, derived 3; heights documented 14, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/62237 historic=castle Q426339 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 180 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 307 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":32,"medianInside":0.1,"medianOutside":29.2}
- sea-1: DEM check failed {"cells":841,"medianInside":28.8,"medianOutside":null}
- sea-2: DEM check ok {"cells":29,"medianInside":0,"medianOutside":29.1}
- 36 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.83646/14.25057) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|art museum\|historic house museum\|Italian national museum\|history museum\|art collection\|royal palace\|religious museum\|palazzo museum\|Istituto museale ad autonomia speciale\|Museum of the Italian Ministry of Culture; sitelinks=30; wikidata:Q426339 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/royal-palace-of-naples-q426339.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
