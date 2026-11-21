# Santo Antonio Fort

> Mozambique · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `santo-antonio-fort-q33134726` |
| Coordinates | -12.34134, 40.58513 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-12.34134/40.58513)) |
| Wikidata | [Q33134726](https://www.wikidata.org/wiki/Q33134726) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Ibo District |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 78 elements (outline 1, coastline 1, road 17, wall 4, building 53, zone 1, water 1).

Evidence: documented 0, mapped 78, inferred 0, derived 1; heights documented 0, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/361322505 historic=fort Q10284197 460 m from ledger point
- origin moved 460 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":234,"medianInside":2.2,"medianOutside":9.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-12.34134/40.58513) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=1; wikidata:Q33134726 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 78 elements); data/traces/santo-antonio-fort-q33134726.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/mozambique.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
