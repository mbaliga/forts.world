# Baluardo San Martino

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baluardo-san-martino-q66480957` |
| Coordinates | 43.84898, 10.50894 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.84898/10.50894)) |
| Wikidata | [Q66480957](https://www.wikidata.org/wiki/Q66480957) (CC0) |
| Wikidata class | fort |
| Types | fort\|bastion\|historic building |
| Administrative area | Lucca |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 3, road 169, waterway 5, wall 19, building 275, zone 11, retaining-wall 9).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 1, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20511810 historic=fort Q66480957 20 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 275 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 169 mapped (trace size budget); minor lanes are not drawn
- origin moved 19 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.84898/10.50894) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|bastion\|historic building; sitelinks=1; wikidata:Q66480957 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/baluardo-san-martino-q66480957.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
