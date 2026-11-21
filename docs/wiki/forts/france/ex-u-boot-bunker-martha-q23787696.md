# ex U-Boot-Bunker Martha

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ex-u-boot-bunker-martha-q23787696` |
| Coordinates | 43.33856, 5.34658 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.33856/5.34658)) |
| Wikidata | [Q23787696](https://www.wikidata.org/wiki/Q23787696) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|data center\|unfinished building |
| Administrative area | Marseille |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 201 elements (outline 1, marker 1, road 138, building 42, wall 1, coastline 2, zone 6, retaining-wall 7, cliff 1, water 2).

Evidence: documented 0, mapped 201, inferred 0, derived 2; heights documented 0, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/159863825 historic=(none; chosen by its Wikidata id) Q23787696 23 m from ledger point
- origin moved 31 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":91,"medianInside":0,"medianOutside":5.2}
- sea-1: DEM check failed {"cells":727,"medianInside":4.9,"medianOutside":0.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.33856/5.34658) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|data center\|unfinished building; sitelinks=3; wikidata:Q23787696 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 136 elements); data/traces/ex-u-boot-bunker-martha-q23787696.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 201 elements; outline osm:way/159863825 historic=(none; chosen by its Wikidata id) Q23787696 23 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
