# Leobner Tor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `leobner-tor-q37771578` |
| Coordinates | 47.2708, 15.32411 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.2708/15.32411)) |
| Wikidata | [Q37771578](https://www.wikidata.org/wiki/Q37771578) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Frohnleiten |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |
| OSM `description` | Wohnhaus, ehemaliges Gefängnis |

## What the model contains

Tier **T1**, status `outline+walls`, 384 elements (outline 1, marker 6, waterway 1, road 177, building 178, water 1, zone 9, wall 11).

Evidence: documented 0, mapped 384, inferred 0, derived 0; heights documented 20, inferred 0, unknown 169.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/220813896 historic=yes Q37771227 51 m from ledger point
- origin moved 51 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.2708/15.32411) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q37771578 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 384 elements); data/traces/leobner-tor-q37771578.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
