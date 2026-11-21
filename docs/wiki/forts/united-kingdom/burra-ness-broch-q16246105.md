# Burra Ness Broch

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burra-ness-broch-q16246105` |
| Coordinates | 60.64089, -0.98312 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.64089/-0.98312)) |
| Wikidata | [Q16246105](https://www.wikidata.org/wiki/Q16246105) (CC0) |
| Wikidata class | fortification |
| Types | broch\|archaeological site |
| Administrative area | Shetland Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 9 elements (outline 1, coastline 1, wall 6, water 1).

Evidence: documented 0, mapped 9, inferred 0, derived 1; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/949554720 historic=(none; chosen by its Wikidata id) Q16246105 9 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":233,"medianInside":-1,"medianOutside":-1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.64089/-0.98312) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch\|archaeological site; sitelinks=4; wikidata:Q16246105 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 9 elements); data/traces/burra-ness-broch-q16246105.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 9 elements; outline osm:way/949554720 historic=(none; chosen by its Wikidata id) Q16246105 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
