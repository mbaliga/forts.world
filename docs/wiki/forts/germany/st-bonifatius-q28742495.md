# St. Bonifatius

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-bonifatius-q28742495` |
| Coordinates | 50.00522, 9.82467 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.00522/9.82467)) |
| Wikidata | [Q28742495](https://www.wikidata.org/wiki/Q28742495) (CC0) |
| Wikidata class | fort |
| Types | church building\|fortified church |
| Administrative area | Eußenheim |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 374 elements (outline 1, marker 7, road 85, wall 3, waterway 2, building 265, zone 9, retaining-wall 2).

Evidence: documented 0, mapped 374, inferred 0, derived 0; heights documented 2, inferred 0, unknown 268.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/390581867 historic=(none; chosen by its Wikidata id) Q28742495 9 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.00522/9.82467) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; church building\|fortified church; sitelinks=2; wikidata:Q28742495 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 376 elements); data/traces/st-bonifatius-q28742495.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 374 elements; outline osm:way/390581867 historic=(none; chosen by its Wikidata id) Q28742495 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
