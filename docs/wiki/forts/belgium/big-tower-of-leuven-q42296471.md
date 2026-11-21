# Big Tower of Leuven

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `big-tower-of-leuven-q42296471` |
| Coordinates | 50.88704, 4.68829 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.88704/4.68829)) |
| Wikidata | [Q42296471](https://www.wikidata.org/wiki/Q42296471) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Leuven |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `heritage` | yes |
| OSM `description` | Verloren Kosttoren |
| OSM `ruins` | stone |

## What the model contains

Tier **T1**, status `outline+walls`, 29 elements (outline 1, road 108, zone 15, building 135, water 1, wall 57, retaining-wall 4, waterway 2).

Evidence: documented 0, mapped 29, inferred 0, derived 0; heights documented 1, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1526716649 historic=ruins Q42296471 11 m from ledger point
- pruned to the outline plus 60 m: 323 -> 29 elements
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.88704/4.68829) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q42296471 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/big-tower-of-leuven-q42296471.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 29 elements; outline osm:way/1526716649 historic=ruins Q42296471 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
