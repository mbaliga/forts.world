# Tour de Deaul

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-deaul-q3533324` |
| Coordinates | 46.1629, 5.3304 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.1629/5.3304)) |
| Wikidata | [Q3533324](https://www.wikidata.org/wiki/Q3533324) (CC0) |
| Wikidata class | fort |
| Types | fortified house |
| Administrative area | Revonnas |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | house |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 247 elements (outline 1, marker 2, road 26, building 209, wall 2, zone 7).

Evidence: documented 0, mapped 247, inferred 0, derived 0; heights documented 1, inferred 0, unknown 210.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/123386871 historic=house Q3533324 7 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.1629/5.3304) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house; sitelinks=2; wikidata:Q3533324 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 246 elements); data/traces/tour-de-deaul-q3533324.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 247 elements; outline osm:way/123386871 historic=house Q3533324 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
