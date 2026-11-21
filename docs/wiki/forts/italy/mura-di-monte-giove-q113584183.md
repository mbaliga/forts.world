# Mura di Monte Giove

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mura-di-monte-giove-q113584183` |
| Coordinates | 41.29281, 13.2583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.29281/13.2583)) |
| Wikidata | [Q113584183](https://www.wikidata.org/wiki/Q113584183) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Terracina |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 293 elements (marker 6, coastline 1, road 85, wall 58, retaining-wall 17, zone 2, building 113, water 1, cliff 10).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 5, inferred 0, unknown 183.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16340478 historic=citywalls Q113584183 28 m from ledger point
- site is a site relation of 24 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (472 x 237 m)
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 89 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.29281/13.2583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q113584183 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 293 elements); data/traces/mura-di-monte-giove-q113584183.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
