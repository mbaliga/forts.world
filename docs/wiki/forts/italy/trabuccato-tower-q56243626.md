# Trabuccato Tower

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trabuccato-tower-q56243626` |
| Coordinates | 41.05289, 8.32803 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.05289/8.32803)) |
| Wikidata | [Q56243626](https://www.wikidata.org/wiki/Q56243626) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Porto Torres |
| Inception | 1609 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | tower |

## What the model contains

Tier **T1**, status `outline+walls`, 13 elements (outline 1, coastline 1, road 4, building 3, wall 3, water 1).

Evidence: documented 0, mapped 13, inferred 0, derived 1; heights documented 3, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/358443865 historic=tower Q56243626 8 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":90,"medianInside":0,"medianOutside":10.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.05289/8.32803) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=2; wikidata:Q56243626 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 13 elements); data/traces/trabuccato-tower-q56243626.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 13 elements; outline osm:way/358443865 historic=tower Q56243626 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
