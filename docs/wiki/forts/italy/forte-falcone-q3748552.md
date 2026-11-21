# Forte Falcone

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-falcone-q3748552` |
| Coordinates | 42.81665, 10.32863 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.81665/10.32863)) |
| Wikidata | [Q3748552](https://www.wikidata.org/wiki/Q3748552) (CC0) |
| Wikidata class | fort |
| Types | fort\|military museum |
| Administrative area | Portoferraio |
| Inception | 1994 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, marker 1, road 74, building 86, wall 75, retaining-wall 13, zone 2, coastline 12, cliff 2, water 1).

Evidence: documented 0, mapped 267, inferred 0, derived 1; heights documented 7, inferred 0, unknown 167.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/360709154 historic=fort Q3748552 13 m from ledger point
- origin moved 15 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":81,"medianInside":0,"medianOutside":27.1}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.81665/10.32863) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|military museum; sitelinks=3; wikidata:Q3748552 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/forte-falcone-q3748552.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
