# Castillo de Clarines

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-clarines-q43163633` |
| Coordinates | 37.40327, -6.77209 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.40327/-6.77209)) |
| Wikidata | [Q43163633](https://www.wikidata.org/wiki/Q43163633) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Beas |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `outline-only`, 53 elements (outline 1, road 51, building 1).

Evidence: documented 0, mapped 53, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/866587598 historic=(none; chosen by its Wikidata id) Q43163633 35 m from ledger point
- origin moved 38 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.40327/-6.77209) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=0; wikidata:Q43163633 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 53 elements); data/traces/castillo-de-clarines-q43163633.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 53 elements; outline osm:way/866587598 historic=(none; chosen by its Wikidata id) Q43163633 35 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
