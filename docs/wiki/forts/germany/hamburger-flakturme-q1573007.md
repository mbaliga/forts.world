# Hamburger Flaktürme

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hamburger-flakturme-q1573007` |
| Coordinates | 53.5099, 9.98979 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.5099/9.98979)) |
| Wikidata | [Q1573007](https://www.wikidata.org/wiki/Q1573007) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Hamburg |
| Wikipedia language editions | 5 |
| OSM `historic` | bunker |
| OSM `heritage` | 4 |
| OSM `website` | https://www.iba-hamburg.de/en/projects/energiebunker/projekt/energy-bunker.html |

## What the model contains

Tier **T1**, status `outline-only`, 226 elements (outline 1, road 133, building 92).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 80, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/263812524 historic=bunker Q1573007 5 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.5099/9.98979) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=5; wikidata:Q1573007 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 222 elements); data/traces/hamburger-flakturme-q1573007.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 226 elements; outline osm:way/263812524 historic=bunker Q1573007 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
