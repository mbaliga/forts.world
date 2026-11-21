# Steintorwall bunker

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `steintorwall-bunker-q2431819` |
| Coordinates | 53.5525, 10.00583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.5525/10.00583)) |
| Wikidata | [Q2431819](https://www.wikidata.org/wiki/Q2431819) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter\|deep bunker |
| Administrative area | Hamburg |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, marker 3, road 335, building 122, zone 2, retaining-wall 1, wall 2, water 1).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 87, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/141919434 historic=building Q1821722 247 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 122 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 335 mapped (trace size budget); minor lanes are not drawn
- origin moved 247 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.5525/10.00583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter\|deep bunker; sitelinks=1; wikidata:Q2431819 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/steintorwall-bunker-q2431819.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
