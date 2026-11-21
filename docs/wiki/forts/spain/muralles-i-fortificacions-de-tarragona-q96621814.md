# Muralles i fortificacions de Tarragona

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralles-i-fortificacions-de-tarragona-q96621814` |
| Coordinates | 41.11834, 1.26055 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.11834/1.26055)) |
| Wikidata | [Q96621814](https://www.wikidata.org/wiki/Q96621814) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Tarragona |
| Designations | Cultural Asset of National Interest |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 312 elements (marker 25, coastline 1, road 584, zone 17, building 752, wall 109, water 3, retaining-wall 17).

Evidence: documented 0, mapped 312, inferred 0, derived 0; heights documented 0, inferred 0, unknown 186.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20325373 historic=citywalls Q3121589 243 m from ledger point
- site is a site relation of 17 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (692 x 556 m)
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 60 nearest the outline centre of 752 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 584 mapped (trace size budget); minor lanes are not drawn
- origin moved 275 m from the ledger point to the centre of the mapped site
- 17 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.11834/1.26055) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q96621814 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 381 elements); data/traces/muralles-i-fortificacions-de-tarragona-q96621814.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
