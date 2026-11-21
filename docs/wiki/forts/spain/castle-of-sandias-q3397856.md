# Castle of Sandiás

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-sandias-q3397856` |
| Coordinates | 42.12299, -7.74376 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.12299/-7.74376)) |
| Wikidata | [Q3397856](https://www.wikidata.org/wiki/Q3397856) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `outline-only`, 21 elements (outline 1, road 14, building 6).

Evidence: documented 0, mapped 21, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/911840682 historic=(none; chosen by its Wikidata id) Q3397856 6 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.12299/-7.74376) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=4; wikidata:Q3397856 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 21 elements); data/traces/castle-of-sandias-q3397856.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 21 elements; outline osm:way/911840682 historic=(none; chosen by its Wikidata id) Q3397856 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
