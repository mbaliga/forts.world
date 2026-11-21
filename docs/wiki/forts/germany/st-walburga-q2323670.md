# St. Walburga

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-walburga-q2323670` |
| Coordinates | 50.366, 11.6425 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.366/11.6425)) |
| Wikidata | [Q2323670](https://www.wikidata.org/wiki/Q2323670) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|fortified church |
| Administrative area | Bad Steben |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 2, road 76, waterway 2, building 278, wall 2).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 4, inferred 0, unknown 276.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1160436842 historic=(none; chosen by its Wikidata id) Q2323670 9 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.366/11.6425) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|fortified church; sitelinks=2; wikidata:Q2323670 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 362 elements); data/traces/st-walburga-q2323670.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 361 elements; outline osm:way/1160436842 historic=(none; chosen by its Wikidata id) Q2323670 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
