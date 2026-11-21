# Gut Grittern

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gut-grittern-q1556930` |
| Coordinates | 51.0392, 6.23147 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.0392/6.23147)) |
| Wikidata | [Q1556930](https://www.wikidata.org/wiki/Q1556930) (CC0) |
| Wikidata class | castle |
| Types | water castle |
| Administrative area | Hückelhoven |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | manor |
| OSM `heritage` | yes |
| OSM `description` | Hauptgebäude ehemalige Wasserburg, Backstein Renaissance-Treppengiebel, dreigeschossig, 16. Jahrhundert, um 1900 verändert, 1970/75 wieder aufgebaut. |
| OSM `website` | http://www.limburg-bernd.de/ |

## What the model contains

Tier **T1**, status `outline-only`, 37 elements (outline 1, zone 16, road 10, waterway 2, building 7, water 1).

Evidence: documented 0, mapped 37, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/88398936 historic=manor Q1556930 7 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.0392/6.23147) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle; sitelinks=2; wikidata:Q1556930 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 37 elements); data/traces/gut-grittern-q1556930.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 37 elements; outline osm:way/88398936 historic=manor Q1556930 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
