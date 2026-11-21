# Večka kula

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vecka-kula-q113004628` |
| Coordinates | 44.27959, 15.45351 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.27959/15.45351)) |
| Wikidata | [Q113004628](https://www.wikidata.org/wiki/Q113004628) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Starigrad |
| Inception | 1600 |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `description` | Old Venetian tower |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 10 elements (outline 1, marker 1, road 2, waterway 1, coastline 1, wall 2, water 1).

Evidence: documented 0, mapped 10, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/180167088 historic=ruins Q113004628 0 m from ledger point
- sea-0: DEM check failed {"cells":287,"medianInside":0,"medianOutside":-0.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.27959/15.45351) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q113004628 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 10 elements); data/traces/vecka-kula-q113004628.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
