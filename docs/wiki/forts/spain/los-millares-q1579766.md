# Los Millares

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `los-millares-q1579766` |
| Coordinates | 36.96261, -2.52164 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.96261/-2.52164)) |
| Wikidata | [Q1579766](https://www.wikidata.org/wiki/Q1579766) (CC0) |
| Wikidata class | fortification |
| Types | village\|defensive wall\|necropolis\|archaeological site\|beehive tomb\|abandoned village |
| Administrative area | Santa Fe de Mondújar |
| Designations | bien de interés cultural |
| Wikipedia language editions | 17 |
| OSM `historic` | archaeological_site |
| OSM `barrier` | fence |
| OSM `website` | https://www.travelalmeria.org/archaeological-site-of-losmillares |

## What the model contains

Tier **T1**, status `outline+walls`, 43 elements (outline 1, marker 1, waterway 2, road 23, zone 4, wall 12).

Evidence: documented 0, mapped 43, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/341998688 historic=archaeological_site Q1579766 312 m from ledger point
- origin moved 315 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.96261/-2.52164) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; village\|defensive wall\|necropolis\|archaeological site\|beehive tomb\|abandoned village; sitelinks=17; wikidata:Q1579766 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 43 elements); data/traces/los-millares-q1579766.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
