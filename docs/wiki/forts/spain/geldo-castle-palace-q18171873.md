# Geldo Castle-Palace

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `geldo-castle-palace-q18171873` |
| Coordinates | 39.8371, -0.46645 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.8371/-0.46645)) |
| Wikidata | [Q18171873](https://www.wikidata.org/wiki/Q18171873) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Geldo |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | manor |
| OSM `website` | https://palaciodegeldo.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 2, road 98, waterway 15, retaining-wall 25, zone 27, building 119, wall 17, water 1).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 2, inferred 0, unknown 159.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/614214440 historic=manor Q18171873 47 m from ledger point
- origin moved 48 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.8371/-0.46645) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q18171873 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 320 elements); data/traces/geldo-castle-palace-q18171873.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 305 elements; outline osm:way/614214440 historic=manor Q18171873 47 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
