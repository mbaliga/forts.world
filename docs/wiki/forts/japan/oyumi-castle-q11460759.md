# Oyumi Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oyumi-castle-q11460759` |
| Coordinates | 35.55444, 140.15083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.55444/140.15083)) |
| Wikidata | [Q11460759](https://www.wikidata.org/wiki/Q11460759) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Minami-Oyumichō |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 180 elements (outline 1, road 56, waterway 1, building 486, zone 2).

Evidence: documented 0, mapped 180, inferred 0, derived 0; heights documented 113, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/599427760 historic=archaeological_site Q17228991 486 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 486 mapped (trace size budget); the rest of the town is not drawn
- origin moved 484 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.55444/140.15083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q11460759 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 180 elements); data/traces/oyumi-castle-q11460759.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
