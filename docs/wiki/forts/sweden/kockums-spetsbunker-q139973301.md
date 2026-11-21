# Kockums spetsbunker

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kockums-spetsbunker-q139973301` |
| Coordinates | 55.61201, 12.9909 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.61201/12.9909)) |
| Wikidata | [Q139973301](https://www.wikidata.org/wiki/Q139973301) (CC0) |
| Wikidata class | fortification |
| Types | high-rise bunker |
| Administrative area | Västra hamnen |
| Inception | 1940 |
| Designations | industrial heritage site |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 130 elements (outline 1, marker 1, road 97, building 28, coastline 2, water 1).

Evidence: documented 0, mapped 130, inferred 0, derived 1; heights documented 17, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/978830895 historic=building 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":13,"medianInside":1,"medianOutside":1.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.61201/12.9909) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; high-rise bunker; sitelinks=1; wikidata:Q139973301 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 130 elements); data/traces/kockums-spetsbunker-q139973301.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
