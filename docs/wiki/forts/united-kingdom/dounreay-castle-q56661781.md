# Dounreay Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dounreay-castle-q56661781` |
| Coordinates | 58.57845, -3.75037 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.57845/-3.75037)) |
| Wikidata | [Q56661781](https://www.wikidata.org/wiki/Q56661781) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 29 elements (outline 1, coastline 1, road 20, building 5, waterway 1, water 1).

Evidence: documented 0, mapped 29, inferred 0, derived 1; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/533306553 historic=ruins Q56661781 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":17,"medianInside":0,"medianOutside":9.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.57845/-3.75037) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle; sitelinks=1; wikidata:Q56661781 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 29 elements); data/traces/dounreay-castle-q56661781.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
