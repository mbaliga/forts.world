# Castagneto Carducci Fortress

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castagneto-carducci-fortress-q384086` |
| Coordinates | 43.17531, 10.53894 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.17531/10.53894)) |
| Wikidata | [Q384086](https://www.wikidata.org/wiki/Q384086) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Castagneto Carducci |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `outline-only`, 108 elements (outline 1, coastline 1, road 40, building 65, water 1).

Evidence: documented 0, mapped 108, inferred 0, derived 1; heights documented 43, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/233209698 historic=(none; chosen by its Wikidata id) Q384086 13 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":122,"medianInside":0,"medianOutside":6.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.17531/10.53894) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q384086 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 108 elements); data/traces/castagneto-carducci-fortress-q384086.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 108 elements; outline osm:way/233209698 historic=(none; chosen by its Wikidata id) Q384086 13 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
