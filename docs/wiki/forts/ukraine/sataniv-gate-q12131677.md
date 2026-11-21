# Sataniv Gate

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sataniv-gate-q12131677` |
| Coordinates | 49.25103, 26.24681 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.25103/26.24681)) |
| Wikidata | [Q12131677](https://www.wikidata.org/wiki/Q12131677) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Sataniv |
| Inception | 1724 |
| Designations | architectural monument of national significance of Ukraine |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline-only`, 117 elements (outline 1, marker 1, road 27, building 82, zone 2, water 1, waterway 3).

Evidence: documented 0, mapped 117, inferred 0, derived 0; heights documented 1, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/220477737 historic=city_gate Q12131677 25 m from ledger point
- origin moved 27 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.25103/26.24681) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q12131677 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 106 elements); data/traces/sataniv-gate-q12131677.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 117 elements; outline osm:way/220477737 historic=city_gate Q12131677 25 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
