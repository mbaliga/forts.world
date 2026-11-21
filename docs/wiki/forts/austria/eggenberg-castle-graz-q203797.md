# Eggenberg Castle, Graz

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eggenberg-castle-graz-q203797` |
| Coordinates | 47.07393, 15.39137 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.07393/15.39137)) |
| Wikidata | [Q203797](https://www.wikidata.org/wiki/Q203797) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|museum |
| Administrative area | Graz |
| Inception | 1635 |
| Designations | part of UNESCO World Heritage Site\|Listed objects in Austria |
| UNESCO WHC id | 931bis-002 |
| Wikipedia language editions | 39 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 1 |
| OSM `website` | https://www.museum-joanneum.at/schloss-eggenberg-prunkraeume-und-gaerten |

## What the model contains

Tier **T1**, status `outline+walls`, 123 elements (outline 1, road 90, building 21, water 2, retaining-wall 4, wall 4, zone 1).

Evidence: documented 0, mapped 123, inferred 0, derived 0; heights documented 3, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1226855 historic=castle Q203797 10 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.07393/15.39137) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|museum; sitelinks=39; wikidata:Q203797 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 123 elements); data/traces/eggenberg-castle-graz-q203797.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
