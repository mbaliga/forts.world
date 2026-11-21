# Dun Cruit

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-cruit-q63282017` |
| Coordinates | 56.49157, -6.42666 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.49157/-6.42666)) |
| Wikidata | [Q63282017](https://www.wikidata.org/wiki/Q63282017) (CC0) |
| Wikidata class | fort |
| Types | promontory fort |
| Administrative area | Argyll and Bute |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 35 elements (outline 1, coastline 1, zone 11, road 3, cliff 15, water 4).

Evidence: documented 0, mapped 35, inferred 0, derived 4; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/416892143 historic=ruins 499 m from ledger point
- origin moved 500 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":62,"medianInside":4.3,"medianOutside":12.9}
- sea-1: DEM check failed {"cells":399,"medianInside":12.1,"medianOutside":1}
- sea-2: DEM check failed {"cells":390,"medianInside":12.5,"medianOutside":1.7}
- sea-3: DEM check ok {"cells":70,"medianInside":2,"medianOutside":13.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.49157/-6.42666) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; promontory fort; sitelinks=2; wikidata:Q63282017 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 35 elements); data/traces/dun-cruit-q63282017.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
