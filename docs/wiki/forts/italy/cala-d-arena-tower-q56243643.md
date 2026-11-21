# Cala d'Arena Tower

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cala-d-arena-tower-q56243643` |
| Coordinates | 41.10951, 8.32783 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.10951/8.32783)) |
| Wikidata | [Q56243643](https://www.wikidata.org/wiki/Q56243643) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Porto Torres |
| Inception | 1611 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | tower |

## What the model contains

Tier **T1**, status `outline-only`, 8 elements (outline 1, road 2, coastline 1, zone 2, water 2).

Evidence: documented 0, mapped 8, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/279210015 historic=tower Q56243643 12 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":159,"medianInside":0,"medianOutside":18}
- sea-1: DEM check ok {"cells":6,"medianInside":0.7,"medianOutside":2.7}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.10951/8.32783) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=2; wikidata:Q56243643 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/cala-d-arena-tower-q56243643.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 8 elements; outline osm:way/279210015 historic=tower Q56243643 12 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
