# Dodengang

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dodengang-q2232109` |
| Coordinates | 51.04583, 2.84306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.04583/2.84306)) |
| Wikidata | [Q2232109](https://www.wikidata.org/wiki/Q2232109) (CC0) |
| Wikidata class | fortification |
| Types | military trench |
| Administrative area | Diksmuide |
| Inception | 1914 |
| Designations | beschermd monument |
| Wikipedia language editions | 6 |
| OSM `historic` | memorial |
| OSM `description` | Preserved Belgian WWI front-line trench system on the Yser, held under fire for four years; among the last surviving original trench sites of the Western Front. |
| OSM `website` | https://dodengang.be/ |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, marker 3, road 68, waterway 3, building 28, zone 36, water 1, retaining-wall 42, wall 12).

Evidence: documented 0, mapped 194, inferred 0, derived 0; heights documented 0, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/298214152 historic=memorial Q2232109 112 m from ledger point
- origin moved 114 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.04583/2.84306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; military trench; sitelinks=6; wikidata:Q2232109 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 133 elements); data/traces/dodengang-q2232109.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 194 elements; outline osm:way/298214152 historic=memorial Q2232109 112 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
