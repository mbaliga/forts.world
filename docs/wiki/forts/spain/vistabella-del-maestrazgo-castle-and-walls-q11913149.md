# Vistabella del Maestrazgo Castle and Walls

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vistabella-del-maestrazgo-castle-and-walls-q11913149` |
| Coordinates | 40.29447, -0.29281 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.29447/-0.29281)) |
| Wikidata | [Q11913149](https://www.wikidata.org/wiki/Q11913149) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Vistabella del Maestrat |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 368 elements (marker 15, road 150, wall 45, building 535, retaining-wall 24, waterway 3, zone 11).

Evidence: documented 0, mapped 368, inferred 0, derived 0; heights documented 122, inferred 0, unknown 67.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21942717 historic=citywalls 76 m from ledger point
- site is a site relation of 7 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (118 x 152 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 535 mapped (trace size budget); the rest of the town is not drawn
- origin moved 84 m from the ledger point to the centre of the mapped site
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.29447/-0.29281) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=3; wikidata:Q11913149 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/vistabella-del-maestrazgo-castle-and-walls-q11913149.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
