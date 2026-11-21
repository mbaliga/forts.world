# Tor di Caldano

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tor-di-caldano-q3993576` |
| Coordinates | 41.48688, 12.58988 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.48688/12.58988)) |
| Wikidata | [Q3993576](https://www.wikidata.org/wiki/Q3993576) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Anzio |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 15 elements (outline 1, coastline 1, road 8, waterway 2, cliff 1, zone 1, water 1).

Evidence: documented 0, mapped 15, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/167999209 historic=ruins Q3993576 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":201,"medianInside":0,"medianOutside":12.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.48688/12.58988) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=2; wikidata:Q3993576 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 15 elements); data/traces/tor-di-caldano-q3993576.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
