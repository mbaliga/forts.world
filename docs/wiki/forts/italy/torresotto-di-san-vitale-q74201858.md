# Torresotto di San Vitale

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torresotto-di-san-vitale-q74201858` |
| Coordinates | 44.49424, 11.35172 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.49424/11.35172)) |
| Wikidata | [Q74201858](https://www.wikidata.org/wiki/Q74201858) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|gate tower\|Bologna tower |
| Administrative area | Bologna |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 8, road 137, wall 7, building 725, waterway 2, zone 6).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 1, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2007770 historic=yes Q21815963 117 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 725 mapped (trace size budget); the rest of the town is not drawn
- origin moved 112 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.49424/11.35172) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|gate tower\|Bologna tower; sitelinks=2; wikidata:Q74201858 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/torresotto-di-san-vitale-q74201858.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
