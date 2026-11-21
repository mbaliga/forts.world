# Kastell Lostmarc'h

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastell-lostmarc-h-q22925755` |
| Coordinates | 48.21301, -4.55679 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.21301/-4.55679)) |
| Wikidata | [Q22925755](https://www.wikidata.org/wiki/Q22925755) (CC0) |
| Wikidata class | fortification |
| Types | oppidum\|dolmen |
| Administrative area | Crozon |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 24 elements (outline 1, road 19, zone 1, coastline 2, water 1).

Evidence: documented 0, mapped 24, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1163857973 historic=archaeological_site 43 m from ledger point
- origin moved 39 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":263,"medianInside":0,"medianOutside":18.2}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.21301/-4.55679) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; oppidum\|dolmen; sitelinks=3; wikidata:Q22925755 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 24 elements); data/traces/kastell-lostmarc-h-q22925755.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
