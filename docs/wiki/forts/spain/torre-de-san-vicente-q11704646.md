# Torre de San Vicente

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-san-vicente-q11704646` |
| Coordinates | 40.04719, 0.06944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.04719/0.06944)) |
| Wikidata | [Q11704646](https://www.wikidata.org/wiki/Q11704646) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Benicàssim |
| Inception | 1600 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | tower |

## What the model contains

Tier **T1**, status `outline+walls`, 134 elements (outline 1, marker 1, road 58, water 3, coastline 3, waterway 1, building 46, zone 11, wall 10).

Evidence: documented 0, mapped 134, inferred 0, derived 2; heights documented 4, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1206854743 historic=tower Q11704646 11 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":112,"medianInside":0,"medianOutside":4.8}
- sea-1: DEM check ok {"cells":7,"medianInside":0.3,"medianOutside":3.5}
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.04719/0.06944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=3; wikidata:Q11704646 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 140 elements); data/traces/torre-de-san-vicente-q11704646.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 134 elements; outline osm:way/1206854743 historic=tower Q11704646 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
