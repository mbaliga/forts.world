# Luftschutzbunker Appenmühle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `luftschutzbunker-appenmuhle-q59652384` |
| Coordinates | 49.00448, 8.33812 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.00448/8.33812)) |
| Wikidata | [Q59652384](https://www.wikidata.org/wiki/Q59652384) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter |
| Administrative area | Karlsruhe |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `website` | https://ka.stadtwiki.net/Bunker_Appenm%C3%BChle |

## What the model contains

Tier **T1**, status `outline-only`, 261 elements (outline 1, marker 2, road 114, waterway 2, zone 21, building 359, retaining-wall 1).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 2, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/519760630 historic=yes 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 359 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.00448/8.33812) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter; sitelinks=2; wikidata:Q59652384 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 261 elements); data/traces/luftschutzbunker-appenmuhle-q59652384.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
