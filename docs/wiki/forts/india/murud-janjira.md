# Murud-Janjira

> India · Maharashtra · evidence: **T2 (partial)** · status: `plan-traced`

## Identity

| Field | Value |
|---|---|
| Site id | `murud-janjira` |
| Coordinates | 18.3, 72.964 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.3/72.964)) |
| Programme catalogue | confidence high, significance rank 208; sources catalogue:murud-janjira;wikidata:Q301996;smith-newton:r74 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 11 elements (outline 1, coastline 2, water 3, building 2, wall 1, road 1).

Evidence: documented 0, mapped 11, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/330556777 historic=citywalls 90 m from ledger point
- island ring (61381 m2) cut out of sea-0
- origin moved 91 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3745,"medianInside":1,"medianOutside":7.7}
- 21 DEM cells below -3 m (bathymetry) clamped to -3 m
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.3/72.964) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/murud-janjira-pass.md](../../../research/murud-janjira-pass.md)

## Ledger note

src/levels/murud-janjira.trace.js (curation tools/trace/curation/murud-janjira.mjs), level src/levels/janjira.js; eras 1733/1774/today plus sibling ~built eras (schematic: wall 14 m, 18 bastions 15 m, palace 16 m, two gate openings; all heights assumed and labelled). Plan registered to OSM by silhouette fit (IoU 0.88), validated 3-15 m on palace, citadel, tanks; stated +-15 m; printed scale bar disagrees with fit by 24%. NOT traced: ~80 house blocks, 19th bastion (plan shows 18), sea approaches. Terrain: 30 m DEM gives 16-21 m inside the island (artefact); plan-magazine unreachable on foot for that reason. Old hand level kept as src/levels/janjira-hand.js. T2 complete needs a survey plan, photographs for heights, finer DEM. docs/research/murud-janjira-pass.md

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
