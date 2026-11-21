# Stadttor von Camaret-sur-Aigues

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-von-camaret-sur-aigues-q22919101` |
| Coordinates | 44.16426, 4.8731 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.16426/4.8731)) |
| Wikidata | [Q22919101](https://www.wikidata.org/wiki/Q22919101) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Camaret-sur-Aigues |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 236 elements (outline 1, marker 6, road 97, waterway 3, building 429, zone 2, wall 7).

Evidence: documented 0, mapped 236, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/76150948 historic=city_gate Q22919101 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 429 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.16426/4.8731) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q22919101 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 235 elements); data/traces/stadttor-von-camaret-sur-aigues-q22919101.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 236 elements; outline osm:way/76150948 historic=city_gate Q22919101 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
