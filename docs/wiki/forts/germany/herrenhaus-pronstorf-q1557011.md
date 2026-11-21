# Herrenhaus Pronstorf

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `herrenhaus-pronstorf-q1557011` |
| Coordinates | 53.9557, 10.4662 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.9557/10.4662)) |
| Wikidata | [Q1557011](https://www.wikidata.org/wiki/Q1557011) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Pronstorf |
| Designations | Heritage monument in Schleswig-Holstein\|Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | manor |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, road 30, zone 1, building 13, water 4, wall 2).

Evidence: documented 0, mapped 51, inferred 0, derived 0; heights documented 1, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/317868764 historic=manor Q1557011 9 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.9557/10.4662) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1557011 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 51 elements); data/traces/herrenhaus-pronstorf-q1557011.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 51 elements; outline osm:way/317868764 historic=manor Q1557011 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
