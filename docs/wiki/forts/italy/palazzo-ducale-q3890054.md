# Palazzo Ducale

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-ducale-q3890054` |
| Coordinates | 44.54253, 10.77969 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.54253/10.77969)) |
| Wikidata | [Q3890054](https://www.wikidata.org/wiki/Q3890054) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|art museum\|religious museum\|museum of modern art\|historical park museum\|palazzo museum\|Museum of the Italian Ministry of Culture\|Italian national museum\|Palazzo |
| Administrative area | Sassuolo |
| Inception | 1650 |
| Designations | Italian national heritage |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://gallerie-estensi.beniculturali.it/palazzo-ducale/ |

## What the model contains

Tier **T1**, status `outline+walls`, 220 elements (outline 1, marker 1, road 122, building 74, waterway 6, water 5, zone 4, wall 7).

Evidence: documented 0, mapped 220, inferred 0, derived 0; heights documented 0, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/149244771 historic=castle Q3890054 17 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.54253/10.77969) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|art museum\|religious museum\|museum of modern art\|historical park museum\|palazzo museum\|Museum of the Italian Ministry of Culture\|Italian national museum\|Palazzo; sitelinks=9; wikidata:Q3890054 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 220 elements); data/traces/palazzo-ducale-q3890054.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
