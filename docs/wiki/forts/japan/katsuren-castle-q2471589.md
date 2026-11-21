# Katsuren Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `katsuren-castle-q2471589` |
| Coordinates | 26.32981, 127.87888 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.32981/127.87888)) |
| Wikidata | [Q2471589](https://www.wikidata.org/wiki/Q2471589) (CC0) |
| Wikidata class | fortification |
| Types | gusuku |
| Administrative area | Uruma |
| Designations | part of UNESCO World Heritage Site\|Historic Site of Japan |
| UNESCO WHC id | 972-005 |
| Wikipedia language editions | 16 |
| OSM `historic` | memorial |

## What the model contains

Tier **T1**, status `outline-only`, 80 elements (outline 1, marker 3, road 36, retaining-wall 20, building 13, zone 6, water 1).

Evidence: documented 0, mapped 80, inferred 0, derived 0; heights documented 1, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/546221960 historic=memorial Q2471589 243 m from ledger point
- origin moved 243 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.32981/127.87888) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gusuku; sitelinks=16; wikidata:Q2471589 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 73 elements); data/traces/katsuren-castle-q2471589.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 80 elements; outline osm:way/546221960 historic=memorial Q2471589 243 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
