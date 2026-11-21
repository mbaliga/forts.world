# Fort Lapointe

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-lapointe-q22995937` |
| Coordinates | 45.9588, -1.0759 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.9588/-1.0759)) |
| Wikidata | [Q22995937](https://www.wikidata.org/wiki/Q22995937) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Fouras |
| Inception | 1672 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `heritage` | 3 |
| OSM `website` | https://www.fortlapointe.com/l-histoire/ |

## What the model contains

Tier **T1**, status `outline+walls`, 13 elements (outline 1, coastline 1, road 3, building 2, waterway 3, water 2, wall 1).

Evidence: documented 0, mapped 13, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/92529114 historic=(none; chosen by its Wikidata id) Q22995937 19 m from ledger point
- origin moved 18 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":211,"medianInside":0,"medianOutside":1.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.9588/-1.0759) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q22995937 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 13 elements); data/traces/fort-lapointe-q22995937.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 13 elements; outline osm:way/92529114 historic=(none; chosen by its Wikidata id) Q22995937 19 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
