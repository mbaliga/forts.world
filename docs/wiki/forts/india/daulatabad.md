# Daulatabad (Devagiri)

> India · Maharashtra · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `daulatabad` |
| Coordinates | 19.944543, 75.217187 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/19.944543/75.217187)) |
| Wikidata | [Q88667786](https://www.wikidata.org/wiki/Q88667786) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Aurangabad district |
| Designations | Monument of National Importance |
| Wikipedia language editions | 11 |
| Programme catalogue | confidence high, significance rank 224; sources catalogue:daulatabad;wikidata:Q88667786;smith-newton:r115 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 105 elements (outline 1, marker 7, road 62, wall 15, zone 3, water 1, cliff 2, building 14).

Evidence: documented 0, mapped 105, inferred 0, derived 0; heights documented 0, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1246827867 historic=fort Q88667786 521 m from ledger point
- origin moved 526 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/19.944543/75.217187) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/daulatabad-pass.md](../../../research/daulatabad-pass.md)

## Ledger note

src/levels/daulatabad.trace.js (curation tools/trace/curation/daulatabad.mjs), level src/levels/daulatabad.js; eras 1327 (hill and scarp only), 1633 (adds mapped wall lines and 3 gates), today. All carried back as inferred. OSM outline is the citadel hill only (~180 m); ring walls are not identified as Ambarkot or Kataka. No plan, survey or dated image found; no wall or tower height read. Wikipedia dates conflict (annexation 1307/08, capital move 1327/28, Mughal capture 1632/33; Chand Minar 1347-58 vs 1446). NOT traced: Chand Minar, Chini Mahal, moat, dark passage. Old hand level kept as daulatabad-hand.js. T2 needs a survey plan, heights, finer DEM. docs/research/daulatabad-pass.md

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
