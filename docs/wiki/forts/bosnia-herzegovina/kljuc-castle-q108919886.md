# Ključ Castle

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kljuc-castle-q108919886` |
| Coordinates | 43.0934, 18.4889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.0934/18.4889)) |
| Wikidata | [Q108919886](https://www.wikidata.org/wiki/Q108919886) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Gacko Municipality |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 8 |
| OSM `historic` | manor |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, zone 4, road 2, building 4).

Evidence: documented 0, mapped 11, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1446463406 historic=manor Q108919886 43 m from ledger point
- origin moved 40 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.0934/18.4889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=8; wikidata:Q108919886 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 12 elements); data/traces/kljuc-castle-q108919886.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 11 elements; outline osm:way/1446463406 historic=manor Q108919886 43 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
