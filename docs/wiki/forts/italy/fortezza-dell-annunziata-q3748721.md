# Fortezza dell'Annunziata

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortezza-dell-annunziata-q3748721` |
| Coordinates | 43.79037, 7.59579 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.79037/7.59579)) |
| Wikidata | [Q3748721](https://www.wikidata.org/wiki/Q3748721) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Ventimiglia |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 124 elements (outline 1, road 26, water 2, cliff 2, building 82, zone 5, coastline 1, retaining-wall 4, wall 1).

Evidence: documented 0, mapped 124, inferred 0, derived 1; heights documented 0, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/688321382 historic=fort Q3748617 235 m from ledger point
- origin moved 232 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":19,"medianInside":0.3,"medianOutside":98.3}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.79037/7.59579) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q3748721 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 124 elements); data/traces/fortezza-dell-annunziata-q3748721.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
