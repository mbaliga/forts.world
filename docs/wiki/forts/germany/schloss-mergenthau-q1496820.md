# Schloss Mergenthau

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-mergenthau-q1496820` |
| Coordinates | 48.31444, 10.99444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.31444/10.99444)) |
| Wikidata | [Q1496820](https://www.wikidata.org/wiki/Q1496820) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site\|country house |
| Administrative area | Kissing |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `heritage` | 4 |
| OSM `website` | https://www.gut-mergenthau.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, road 42, building 17, water 2, zone 7, wall 1).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 11, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/127098617 historic=(none; chosen by its Wikidata id) Q1496820 59 m from ledger point
- origin moved 58 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.31444/10.99444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site\|country house; sitelinks=2; wikidata:Q1496820 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 69 elements); data/traces/schloss-mergenthau-q1496820.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 70 elements; outline osm:way/127098617 historic=(none; chosen by its Wikidata id) Q1496820 59 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
