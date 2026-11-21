# Hohenburg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hohenburg-q1623666` |
| Coordinates | 47.23448, 11.4152 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.23448/11.4152)) |
| Wikidata | [Q1623666](https://www.wikidata.org/wiki/Q1623666) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site\|residential building |
| Administrative area | Innsbruck |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 129 elements (outline 1, road 49, building 74, zone 4, water 1).

Evidence: documented 0, mapped 129, inferred 0, derived 0; heights documented 5, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/111267214 historic=(none; chosen by its Wikidata id) Q1623666 4 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.23448/11.4152) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site\|residential building; sitelinks=2; wikidata:Q1623666 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 130 elements); data/traces/hohenburg-q1623666.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 129 elements; outline osm:way/111267214 historic=(none; chosen by its Wikidata id) Q1623666 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
