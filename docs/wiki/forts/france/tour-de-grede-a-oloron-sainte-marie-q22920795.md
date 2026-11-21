# Tour de Grède à Oloron-Sainte-Marie

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-grede-a-oloron-sainte-marie-q22920795` |
| Coordinates | 43.18971, -0.60658 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.18971/-0.60658)) |
| Wikidata | [Q22920795](https://www.wikidata.org/wiki/Q22920795) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Oloron-Sainte-Marie |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 220 elements (outline 1, marker 3, road 114, water 1, wall 100, building 337, waterway 2, retaining-wall 35, zone 25).

Evidence: documented 0, mapped 220, inferred 0, derived 0; heights documented 9, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63856688 historic=(none; chosen by its Wikidata id) Q22920795 3 m from ledger point
- pruned to the outline plus 150 m: 618 -> 313 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 153 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.18971/-0.60658) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q22920795 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 399 elements); data/traces/tour-de-grede-a-oloron-sainte-marie-q22920795.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 220 elements; outline osm:way/63856688 historic=(none; chosen by its Wikidata id) Q22920795 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
