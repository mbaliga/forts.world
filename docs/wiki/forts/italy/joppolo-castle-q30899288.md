# Joppolo Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `joppolo-castle-q30899288` |
| Coordinates | 37.38666, 13.55379 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.38666/13.55379)) |
| Wikidata | [Q30899288](https://www.wikidata.org/wiki/Q30899288) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Joppolo Giancaxio |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 181 elements (outline 1, marker 1, waterway 2, road 78, zone 2, building 97).

Evidence: documented 0, mapped 181, inferred 0, derived 0; heights documented 0, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/340002401 historic=(none; chosen by its Wikidata id) Q30899288 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.38666/13.55379) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q30899288 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 183 elements); data/traces/joppolo-castle-q30899288.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 181 elements; outline osm:way/340002401 historic=(none; chosen by its Wikidata id) Q30899288 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
