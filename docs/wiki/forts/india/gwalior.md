# Gwalior

> India · Madhya Pradesh · evidence: **T2 (partial)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gwalior` |
| Coordinates | 26.23, 78.169 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.23/78.169)) |
| Wikidata | [Q2487545](https://www.wikidata.org/wiki/Q2487545) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Gwalior |
| Designations | Tentative World Heritage Site\|Monument of National Importance |
| Wikipedia language editions | 23 |
| Programme catalogue | confidence high, significance rank 186; sources catalogue:gwalior;wikidata:Q2487545;smith-newton:r76 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 65 elements (outline 1, marker 7, road 1483, water 7, building 79, zone 3, waterway 26, wall 7).

Evidence: documented 0, mapped 65, inferred 0, derived 0; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/171185148 historic=castle Q2487545 826 m from ledger point
- pruned to the outline plus 25 m: 1613 -> 65 elements
- origin moved 830 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.23/78.169) | 2026-11-04 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-04 |

## Research notes

- [docs/research/gwalior-pass.md](../../../research/gwalior-pass.md)

## Ledger note

src/levels/gwalior.trace.js (curation tools/trace/curation/gwalior.mjs), level src/levels/gwalior.js; eras 1780/1868/today plus sibling ~built eras (schematic layer: wall 8 m, palace masses 10-12 m, Teli ka Mandir 25 m, Hathiya towers; all heights assumed and labelled). Plan: Cunningham 1908 (Commons, PD), registered by two local fits, gates +-80 m and snapped to the OSM scarp wall, palaces +-60 m. NOT traced: southern tanks, Sas-Bahu and other temples, Badalgarh, rock-cut Jain groups, escalade site. Old hand level kept as src/levels/gwalior-hand.js (unregistered). T2 needs a survey plan or the 1911 ASI plan (licence regex fix), photographs for heights, finer DEM. docs/research/gwalior-pass.md

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
