# Atalaya Castle

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `atalaya-castle-q4812699` |
| Coordinates | 33.50179, -79.06755 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.50179/-79.06755)) |
| Wikidata | [Q4812699](https://www.wikidata.org/wiki/Q4812699) (CC0) |
| Wikidata class | castle |
| Types | castle\|country house |
| Administrative area | Georgetown County |
| Designations | National Register of Historic Places listed place\|National Register of Historic Places contributing property |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 41 elements (outline 1, coastline 1, road 31, building 5, wall 2, water 1).

Evidence: documented 0, mapped 41, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20607023 historic=castle Q4812699 14 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":10,"medianInside":0,"medianOutside":0.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.50179/-79.06755) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|country house; sitelinks=2; wikidata:Q4812699 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 41 elements); data/traces/atalaya-castle-q4812699.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
