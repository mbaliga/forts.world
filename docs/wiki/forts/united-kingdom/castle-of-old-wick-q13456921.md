# Castle of Old Wick

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-old-wick-q13456921` |
| Coordinates | 58.42327, -3.08163 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.42327/-3.08163)) |
| Wikidata | [Q13456921](https://www.wikidata.org/wiki/Q13456921) (CC0) |
| Wikidata class | castle |
| Types | castle\|promontory fort |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 19 elements (outline 1, road 12, coastline 4, waterway 1, water 1).

Evidence: documented 0, mapped 19, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42231295 historic=castle 8 m from ledger point
- island ring (1090 m2) cut out of sea-0
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":113,"medianInside":5.5,"medianOutside":33.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.42327/-3.08163) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|promontory fort; sitelinks=3; wikidata:Q13456921 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 19 elements); data/traces/castle-of-old-wick-q13456921.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
