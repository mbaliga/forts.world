# Torre di Calasetta

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-di-calasetta-q113578986` |
| Coordinates | 39.1094, 8.36676 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.1094/8.36676)) |
| Wikidata | [Q113578986](https://www.wikidata.org/wiki/Q113578986) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Calasetta |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | tower |

## What the model contains

Tier **T1**, status `outline-only`, 202 elements (outline 1, marker 1, road 78, building 565, coastline 1, water 1).

Evidence: documented 0, mapped 202, inferred 0, derived 1; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/136280112 historic=tower Q113578986 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 565 mapped (trace size budget); the rest of the town is not drawn
- origin moved 12 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":78,"medianInside":0,"medianOutside":15.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.1094/8.36676) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=1; wikidata:Q113578986 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 199 elements); data/traces/torre-di-calasetta-q113578986.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 202 elements; outline osm:way/136280112 historic=tower Q113578986 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
