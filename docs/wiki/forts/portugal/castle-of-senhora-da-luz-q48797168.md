# Castle of Senhora da Luz

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-senhora-da-luz-q48797168` |
| Coordinates | 37.0851, -8.73047 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.0851/-8.73047)) |
| Wikidata | [Q48797168](https://www.wikidata.org/wiki/Q48797168) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Luz |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, road 79, building 152, zone 8, wall 63, retaining-wall 1, coastline 1, cliff 1, water 1).

Evidence: documented 0, mapped 308, inferred 0, derived 1; heights documented 1, inferred 0, unknown 216.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/463096221 historic=castle Q48797168 5 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":165,"medianInside":0,"medianOutside":13.2}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.0851/-8.73047) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=6; wikidata:Q48797168 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/castle-of-senhora-da-luz-q48797168.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
