# Fort Khejarla

> India · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-khejarla-q116949022` |
| Coordinates | 26.328215, 73.681115 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.328215/73.681115)) |
| Wikidata | [Q116949022](https://www.wikidata.org/wiki/Q116949022) (CC0) |
| Programme catalogue | confidence medium, significance rank 3433; sources wikidata:Q116949022 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 151 elements (outline 1, road 30, water 1, zone 2, building 116).

Evidence: documented 0, mapped 151, inferred 0, derived 0; heights documented 0, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1124741459 historic=(none; chosen by its Wikidata id) Q116949022 35 m from ledger point
- origin moved 35 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.328215/73.681115) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=3433; sources=1 \| 2026-11-17: auto-T1 by the model-all pipeline run directly (location-only, 149 elements); data/traces/fort-khejarla-q116949022.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 151 elements; outline osm:way/1124741459 historic=(none; chosen by its Wikidata id) Q116949022 35 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
