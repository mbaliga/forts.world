# Chittorgarh

> India · Rajasthan · evidence: **T1 (plan-validated)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chittorgarh` |
| Coordinates | 24.887222, 74.646944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.887222/74.646944)) |
| Wikidata | [Q3695769](https://www.wikidata.org/wiki/Q3695769) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Chittorgarh |
| Designations | part of UNESCO World Heritage Site\|Monument of National Importance |
| UNESCO WHC id | 247rev-001 |
| Wikipedia language editions | 31 |
| Programme catalogue | confidence high, significance rank 9; sources catalogue:chittorgarh;wikidata:Q3695769;smith-newton:r97 |
| OSM `historic` | fort |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 15, waterway 4, road 1886, water 21, wall 30, retaining-wall 3, building 128, zone 8, cliff 3).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 0, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/782250688 historic=fort Q3695769 907 m from ledger point
- pruned to the outline plus 25 m: 2099 -> 316 elements
- origin moved 907 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.887222/74.646944) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/chittorgarh-boundary-reconciliation.md](../../../research/chittorgarh-boundary-reconciliation.md)
- [docs/research/chittorgarh-pass.md](../../../research/chittorgarh-pass.md)

## Ledger note

src/levels/chittorgarh.trace.js (curation tools/trace/curation/chittorgarh.mjs), level src/levels/chittorgarh.js; eras 1568/today plus ~built (schematic: rampart 8 m high 3 m thick assumed; Vijay Stambh 37 m and Kirti Stambh 24 m from earlier citations, not re-checked). Board (ASI Jaipur Circle, CC BY-SA 4.0) registered by similarity fit on 12 control points: rms 20 m; independent checks Ratan Singh Palace 3 m, Kalika Mata 3 m, Padmini Palace 8 m, havelis 11-12 m, Kumbha Palace 46 m. Three board tanks have no OSM water within 130 m. 13 OSM city_gate nodes promoted to plain gates. Steps/paths dropped for size. Dimension conflict with Britannica (13 km circumference). Padmini Mahal is inside a mapped pond (not reachable). Old hand level kept as chittorgarh-hand.js. T2 needs a survey plan, wall/gate heights, finer DEM. docs/research/chittorgarh-pass.md \| 2026-11-19: the original hand-built constructed level (chittorgarh-hand, one of the first Ten Forts of India) is listed again in the game as "Chittorgarh (constructed)" beside the traced level, and the Forts of the World page links to it (ten-forts.html?fort=chittorgarh-hand).

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
