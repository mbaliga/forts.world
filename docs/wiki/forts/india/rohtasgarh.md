# Rohtasgarh

> India · Bihar · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rohtasgarh` |
| Coordinates | 24.623334, 83.917742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.623334/83.917742)) |
| Wikidata | [Q11946159](https://www.wikidata.org/wiki/Q11946159) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Rohtas district |
| Designations | Monument of National Importance |
| Wikipedia language editions | 14 |
| Programme catalogue | confidence high, significance rank 214; sources catalogue:rohtasgarh;wikidata:Q11946159;smith-newton:r131 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, road 30, wall 1, cliff 1, zone 3).

Evidence: documented 0, mapped 36, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/119221893 historic=castle Q11946159 23 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.623334/83.917742) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/rohtasgarh-pass.md](../../../research/rohtasgarh-pass.md)

## Ledger note

src/levels/rohtasgarh.trace.js (curation tools/trace/curation/rohtasgarh.mjs), level src/levels/rohtasgarh.js; eras 1597/today (OSM castle outline, plateau-edge wall clipped to the 1.1 km DEM window, cliff carried back, inferred). Only a small part of the ~42 km2 plateau is mapped: no gate, palace, temple or tank has a plan position; heights unsourced. Constructed layer: one wall, 6 m assumed. Old prototype kept in kaimur-ganga.js, unregistered. T2 needs: ASI/Bihar survey plan, Asher & Asher 1984 Archaeology 37(3), Patil 1963 pp.486-488, wall/gate heights. docs/research/rohtasgarh-pass.md

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
