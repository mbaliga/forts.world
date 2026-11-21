# 7ª Bataria do Outão

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `7a-bataria-do-outao-q21082360` |
| Coordinates | 38.48998, -8.9373 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.48998/-8.9373)) |
| Wikidata | [Q21082360](https://www.wikidata.org/wiki/Q21082360) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort\|coastal battery |
| Administrative area | Setubal (São Julião, Nossa Senhora da Anunciada e Santa Maria da Graça) |
| Designations | heritage without legal protection |
| Wikipedia language editions | 1 |
| OSM `historic` | military |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, marker 1, road 28, building 27, wall 4, cliff 7, coastline 1, water 1).

Evidence: documented 0, mapped 70, inferred 0, derived 1; heights documented 4, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/160685962 historic=military Q21082360 50 m from ledger point
- origin moved 48 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":16,"medianInside":1.7,"medianOutside":134.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.48998/-8.9373) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort\|coastal battery; sitelinks=1; wikidata:Q21082360 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 60 elements); data/traces/7a-bataria-do-outao-q21082360.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 70 elements; outline osm:way/160685962 historic=military Q21082360 50 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
