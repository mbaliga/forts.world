# Wehrturm

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wehrturm-q64512570` |
| Coordinates | 46.57023, 13.81211 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.57023/13.81211)) |
| Wikidata | [Q64512570](https://www.wikidata.org/wiki/Q64512570) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Villach |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 0 |
| OSM `historic` | tower |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 67 elements (outline 1, marker 2, road 42, cliff 1, waterway 2, building 14, zone 4, water 1).

Evidence: documented 0, mapped 67, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/668773898 historic=tower Q64512570 1 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.57023/13.81211) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=0; wikidata:Q64512570 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 67 elements); data/traces/wehrturm-q64512570.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 67 elements; outline osm:way/668773898 historic=tower Q64512570 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
