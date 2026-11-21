# Fronte d'Attacco

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fronte-d-attacco-q113545625` |
| Coordinates | 42.81577, 10.32761 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.81577/10.32761)) |
| Wikidata | [Q113545625](https://www.wikidata.org/wiki/Q113545625) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Portoferraio |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, marker 1, road 74, building 86, wall 75, retaining-wall 13, zone 2, coastline 12, cliff 2, water 1).

Evidence: documented 0, mapped 267, inferred 0, derived 1; heights documented 7, inferred 0, unknown 167.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/360709154 historic=fort Q3748552 140 m from ledger point
- origin moved 142 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":81,"medianInside":0,"medianOutside":27.1}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.81577/10.32761) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113545625 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/fronte-d-attacco-q113545625.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
