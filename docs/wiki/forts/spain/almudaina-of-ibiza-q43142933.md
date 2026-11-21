# Almudaina of Ibiza

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `almudaina-of-ibiza-q43142933` |
| Coordinates | 38.90643, 1.43629 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.90643/1.43629)) |
| Wikidata | [Q43142933](https://www.wikidata.org/wiki/Q43142933) (CC0) |
| Wikidata class | castle |
| Types | castle\|Monument (Spain) |
| Administrative area | Ibiza |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 11, road 193, wall 8, coastline 1, building 297, zone 4, retaining-wall 12, cliff 1, water 2).

Evidence: documented 0, mapped 310, inferred 0, derived 2; heights documented 9, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/607136377 historic=castle Q43142933 35 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 297 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 193 mapped (trace size budget); minor lanes are not drawn
- origin moved 32 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1,"medianInside":11.1,"medianOutside":36.1}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":36.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.90643/1.43629) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Monument (Spain); sitelinks=1; wikidata:Q43142933 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/almudaina-of-ibiza-q43142933.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
