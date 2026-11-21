# New Bolanden Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `new-bolanden-castle-q997372` |
| Coordinates | 49.6394, 8.01333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.6394/8.01333)) |
| Wikidata | [Q997372](https://www.wikidata.org/wiki/Q997372) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Bolanden |
| Inception | 1200 |
| Designations | cultural heritage monument in Rhineland-Palatinate |
| Wikipedia language editions | 4 |
| OSM `castle_type` | castle |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 136 elements (outline 1, marker 1, road 31, building 91, waterway 3, cliff 1, zone 3, wall 4).

Evidence: documented 0, mapped 136, inferred 0, derived 0; heights documented 27, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/713999814 historic=(none; chosen by its Wikidata id) Q997372 32 m from ledger point
- origin moved 32 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.6394/8.01333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q997372 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 156 elements); data/traces/new-bolanden-castle-q997372.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 136 elements; outline osm:way/713999814 historic=(none; chosen by its Wikidata id) Q997372 32 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
