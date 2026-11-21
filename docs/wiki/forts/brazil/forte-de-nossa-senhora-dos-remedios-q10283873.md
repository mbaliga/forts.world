# Forte de Nossa Senhora dos Remédios

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-nossa-senhora-dos-remedios-q10283873` |
| Coordinates | -3.83833, -32.41028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-3.83833/-32.41028)) |
| Wikidata | [Q10283873](https://www.wikidata.org/wiki/Q10283873) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Fernando de Noronha |
| Designations | heritage asset listed by IPHAN\|Heritage of Portuguese Influence |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, coastline 1, road 5, building 5, zone 4, cliff 2, wall 1, water 1).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 2, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/30687867 historic=fort Q10283873 53 m from ledger point
- origin moved 49 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":207,"medianInside":3.2,"medianOutside":31.4}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-3.83833/-32.41028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q10283873 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 20 elements); data/traces/forte-de-nossa-senhora-dos-remedios-q10283873.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
