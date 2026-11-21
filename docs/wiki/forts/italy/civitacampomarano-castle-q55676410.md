# Civitacampomarano Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `civitacampomarano-castle-q55676410` |
| Coordinates | 41.7805, 14.69104 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.7805/14.69104)) |
| Wikidata | [Q55676410](https://www.wikidata.org/wiki/Q55676410) (CC0) |
| Wikidata class | castle |
| Types | castle\|art museum\|Italian national museum\|history museum\|Museum of the Italian Ministry of Culture\|religious museum\|historical civil building museum\|military museum building |
| Administrative area | Civitacampomarano |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `website` | https://www.musei.molise.beniculturali.it/musei?mid=934&nome=castello-di-civitacampomarano |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, road 106, waterway 2, cliff 1, building 382, retaining-wall 51, wall 3, zone 7).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 0, inferred 0, unknown 174.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/62075956 historic=castle Q55676410 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 382 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.7805/14.69104) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|art museum\|Italian national museum\|history museum\|Museum of the Italian Ministry of Culture\|religious museum\|historical civil building museum\|military museum building; sitelinks=2; wikidata:Q55676410 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/civitacampomarano-castle-q55676410.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
