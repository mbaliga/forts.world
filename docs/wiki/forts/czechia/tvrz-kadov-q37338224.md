# Tvrz Kadov

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tvrz-kadov-q37338224` |
| Coordinates | 49.40308, 13.77411 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.40308/13.77411)) |
| Wikidata | [Q37338224](https://www.wikidata.org/wiki/Q37338224) (CC0) |
| Wikidata class | fort |
| Types | granary\|fortified house |
| Administrative area | Kadov u Blatné |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 162 elements (outline 1, marker 4, road 25, water 2, waterway 1, building 122, zone 5, wall 2).

Evidence: documented 0, mapped 162, inferred 0, derived 0; heights documented 53, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/754497016 historic=(none; chosen by its Wikidata id) Q37338224 19 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.40308/13.77411) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; granary\|fortified house; sitelinks=2; wikidata:Q37338224 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 160 elements); data/traces/tvrz-kadov-q37338224.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 162 elements; outline osm:way/754497016 historic=(none; chosen by its Wikidata id) Q37338224 19 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
