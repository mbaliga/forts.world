# U Cannizzu

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `u-cannizzu-q56258119` |
| Coordinates | 37.88138, 15.11684 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.88138/15.11684)) |
| Wikidata | [Q56258119](https://www.wikidata.org/wiki/Q56258119) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Castiglione di Sicilia |
| Inception | 1400 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 384 elements (outline 1, building 181, road 158, retaining-wall 50, zone 4, wall 57, cliff 2).

Evidence: documented 0, mapped 384, inferred 0, derived 0; heights documented 0, inferred 0, unknown 227.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/129030491 historic=castle Q28001098 453 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 181 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 158 mapped (trace size budget); minor lanes are not drawn
- origin moved 453 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.88138/15.11684) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=1; wikidata:Q56258119 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 384 elements); data/traces/u-cannizzu-q56258119.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
