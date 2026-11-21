# Torre de Cap Andritxol

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-cap-andritxol-q22066406` |
| Coordinates | 39.52911, 2.42485 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.52911/2.42485)) |
| Wikidata | [Q22066406](https://www.wikidata.org/wiki/Q22066406) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Andratx |
| Inception | 1582 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `outline-only`, 22 elements (outline 1, road 16, building 1, coastline 2, zone 1, water 1).

Evidence: documented 0, mapped 22, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/52458576 historic=(none; chosen by its Wikidata id) Q22066406 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":8,"medianInside":0.3,"medianOutside":105.1}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.52911/2.42485) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=4; wikidata:Q22066406 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 22 elements); data/traces/torre-de-cap-andritxol-q22066406.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 22 elements; outline osm:way/52458576 historic=(none; chosen by its Wikidata id) Q22066406 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
