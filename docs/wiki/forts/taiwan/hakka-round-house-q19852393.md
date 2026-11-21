# Hakka Round House

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hakka-round-house-q19852393` |
| Coordinates | 24.60353, 120.82336 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.60353/120.82336)) |
| Wikidata | [Q19852393](https://www.wikidata.org/wiki/Q19852393) (CC0) |
| Wikidata class | fortification |
| Types | cultural center\|tulou |
| Administrative area | Xiaoyi Village |
| Inception | 2014 |
| Wikipedia language editions | 4 |
| OSM `website` | https://www.hakkaroundhouse.mlc.gov.tw |

## What the model contains

Tier **T1**, status `outline-only`, 142 elements (outline 1, road 127, waterway 7, building 2, water 4, zone 1).

Evidence: documented 0, mapped 142, inferred 0, derived 0; heights documented 1, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/317318073 historic=(none; chosen by its Wikidata id) Q19852393 16 m from ledger point
- origin moved 17 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.60353/120.82336) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural center\|tulou; sitelinks=4; wikidata:Q19852393 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 150 elements); data/traces/hakka-round-house-q19852393.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 142 elements; outline osm:way/317318073 historic=(none; chosen by its Wikidata id) Q19852393 16 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
