# Torres de São Paulo e da Cadeia e o pequeno pano de muralha existente entre as duas torres

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torres-de-sao-paulo-e-da-cadeia-e-o-pequeno-pano-q10333271` |
| Coordinates | 41.76805, -8.58452 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.76805/-8.58452)) |
| Wikidata | [Q10333271](https://www.wikidata.org/wiki/Q10333271) (CC0) |
| Wikidata class | fortification |
| Types | tower\|defensive wall\|cultural heritage |
| Administrative area | Arca e Ponte de Lima |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 7, road 151, building 298, waterway 1, wall 9, zone 14, retaining-wall 1).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 0, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/183713912 historic=monument Q73546601 158 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 298 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 151 mapped (trace size budget); minor lanes are not drawn
- origin moved 159 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.76805/-8.58452) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|defensive wall\|cultural heritage; sitelinks=3; wikidata:Q10333271 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/torres-de-sao-paulo-e-da-cadeia-e-o-pequeno-pano-q10333271.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
