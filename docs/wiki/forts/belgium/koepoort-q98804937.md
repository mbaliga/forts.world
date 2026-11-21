# Koepoort

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `koepoort-q98804937` |
| Coordinates | 50.83638, 4.02576 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.83638/4.02576)) |
| Wikidata | [Q98804937](https://www.wikidata.org/wiki/Q98804937) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Ninove |
| Designations | beschermd monument |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 207 elements (outline 1, marker 1, road 79, waterway 1, water 1, zone 3, building 564, wall 1).

Evidence: documented 0, mapped 207, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/441745260 historic=city_gate Q98804937 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 564 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.83638/4.02576) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q98804937 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 206 elements); data/traces/koepoort-q98804937.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 207 elements; outline osm:way/441745260 historic=city_gate Q98804937 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
