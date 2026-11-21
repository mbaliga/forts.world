# Bastione Sangallo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastione-sangallo-q29689560` |
| Coordinates | 43.84259, 13.0235 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.84259/13.0235)) |
| Wikidata | [Q29689560](https://www.wikidata.org/wiki/Q29689560) (CC0) |
| Wikidata class | castle |
| Types | castle\|castrum\|bastion |
| Administrative area | Fano |
| Inception | 1552 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | castrum |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, road 190, building 306, wall 28, coastline 1, retaining-wall 1).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 107, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6841625 historic=castle Q29689560 12 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 306 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 190 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.84259/13.0235) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|castrum\|bastion; sitelinks=2; wikidata:Q29689560 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/bastione-sangallo-q29689560.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
