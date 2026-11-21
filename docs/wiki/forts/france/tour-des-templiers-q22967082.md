# Tour des Templiers

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-des-templiers-q22967082` |
| Coordinates | 45.2717, 5.6158 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.2717/5.6158)) |
| Wikidata | [Q22967082](https://www.wikidata.org/wiki/Q22967082) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Veurey-Voroize |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 230 elements (outline 1, marker 1, road 97, zone 1, building 301, water 5, waterway 3, cliff 2).

Evidence: documented 0, mapped 230, inferred 0, derived 0; heights documented 3, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103633428 historic=(none; chosen by its Wikidata id) Q22967082 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 301 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.2717/5.6158) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q22967082 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 229 elements); data/traces/tour-des-templiers-q22967082.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 230 elements; outline osm:way/103633428 historic=(none; chosen by its Wikidata id) Q22967082 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
