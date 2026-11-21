# Satrustegi Tower, Donostia-San Sebastián

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `satrustegi-tower-donostia-san-sebastian-q9088849` |
| Coordinates | 43.31755, -2.00697 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.31755/-2.00697)) |
| Wikidata | [Q9088849](https://www.wikidata.org/wiki/Q9088849) (CC0) |
| Wikidata class | fortification |
| Types | tower\|tower house |
| Administrative area | San Sebastián |
| Designations | Basque government heritage site |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 107 elements (outline 1, road 68, building 33, retaining-wall 1, zone 1, coastline 1, waterway 1, water 1).

Evidence: documented 0, mapped 107, inferred 0, derived 1; heights documented 16, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39245311 historic=(none; chosen by its Wikidata id) Q9088849 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":9,"medianInside":4.4,"medianOutside":41.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.31755/-2.00697) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|tower house; sitelinks=3; wikidata:Q9088849 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 107 elements); data/traces/satrustegi-tower-donostia-san-sebastian-q9088849.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 107 elements; outline osm:way/39245311 historic=(none; chosen by its Wikidata id) Q9088849 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
