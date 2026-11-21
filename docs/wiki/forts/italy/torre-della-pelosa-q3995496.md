# Torre della Pelosa

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-della-pelosa-q3995496` |
| Coordinates | 40.97094, 8.20705 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.97094/8.20705)) |
| Wikidata | [Q3995496](https://www.wikidata.org/wiki/Q3995496) (CC0) |
| Wikidata class | fortification |
| Types | tower\|watchtower |
| Administrative area | Stintino |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | tower |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 10 elements (outline 1, coastline 3, road 5, water 1).

Evidence: documented 0, mapped 10, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/118039199 historic=tower Q3995496 6 m from ledger point
- island ring (22454 m2) cut out of sea-0
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":288,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.97094/8.20705) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|watchtower; sitelinks=3; wikidata:Q3995496 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 10 elements); data/traces/torre-della-pelosa-q3995496.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 10 elements; outline osm:way/118039199 historic=tower Q3995496 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
