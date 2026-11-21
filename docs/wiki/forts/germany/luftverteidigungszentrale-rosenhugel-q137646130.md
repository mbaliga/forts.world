# Luftverteidigungszentrale Rosenhügel

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `luftverteidigungszentrale-rosenhugel-q137646130` |
| Coordinates | 53.54356, 8.09564 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.54356/8.09564)) |
| Wikidata | [Q137646130](https://www.wikidata.org/wiki/Q137646130) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Wilhelmshaven |
| Designations | cultural heritage monument in Lower Saxony |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `outline-only`, 73 elements (outline 1, road 41, waterway 4, zone 7, building 20).

Evidence: documented 0, mapped 73, inferred 0, derived 0; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/396069424 historic=(none; chosen by its Wikidata id) Q137646130 3 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.54356/8.09564) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=0; wikidata:Q137646130 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 69 elements); data/traces/luftverteidigungszentrale-rosenhugel-q137646130.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 73 elements; outline osm:way/396069424 historic=(none; chosen by its Wikidata id) Q137646130 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
