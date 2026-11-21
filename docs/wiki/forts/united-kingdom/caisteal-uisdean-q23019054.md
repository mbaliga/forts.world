# Caisteal Uisdean

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `caisteal-uisdean-q23019054` |
| Coordinates | 57.53847, -6.37869 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.53847/-6.37869)) |
| Wikidata | [Q23019054](https://www.wikidata.org/wiki/Q23019054) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `ruins` | building |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 15 elements (outline 1, coastline 1, waterway 1, road 5, cliff 1, zone 4, water 1).

Evidence: documented 0, mapped 15, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/607461187 historic=ruins 14 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":197,"medianInside":3,"medianOutside":14.6}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.53847/-6.37869) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=2; wikidata:Q23019054 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 15 elements); data/traces/caisteal-uisdean-q23019054.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
