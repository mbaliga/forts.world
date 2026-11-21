# Champaner-Pavagadh

> India · Gujarat · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pavagadh` |
| Coordinates | 22.484444, 73.515556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.484444/73.515556)) |
| Wikidata | [Q62783238](https://www.wikidata.org/wiki/Q62783238) (CC0) |
| Programme catalogue | confidence high, significance rank 3; sources catalogue:pavagadh;wikidata:Q62783238;wikidata:Q62884829;wikidata:Q844427;wikidata:Q62784088;wikidata:Q62784322;wikidata:Q62785065;wikidata:Q66000294;unesco:1101;smith-newton:r166 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 5 elements (outline 1, road 4).

Evidence: documented 0, mapped 5, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/718499923 historic=archaeological_site Q62783238 227 m from ledger point
- origin moved 227 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.484444/73.515556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

Alpha-K batch (2026-11-11): 10 forts spread across A-Z starting at K, distinct from batch 0; do after batch 0. coords from wikidata (was 22.486,73.53) \| 2026-11-16: plan found: Ramsay 1847 plan of Pavagad (public domain, data/plans/pavagadh/; 500 yd = 1 in, contours, walls, gates, tanks named) but OSM gives only an archaeological-site outline plus 4 roads, so there are no ground control points; T2 needs georeferencing from DEM contours or mapped tanks/gates (not done: would be guessed). auto-T1 outline-only trace built locally. \| 2026-11-17: auto-T1 by the model-all pipeline run directly (outline-only, 5 elements); data/traces/pavagadh.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. 2026-11-18 T2 attempt, honest tier stays auto-T1. Open plan held: Ramsay 1847 'Pavagad' (Commons, public domain; data/plans/pavagadh), which shows the HILL fort (gates, tanks, walls, 500 yd = 1 in). The ledger point and the auto model sit on Champaner town (Helical Stepped Well, 227 m off); with 1800 m geometry OSM has only ~20 Champaner citadel/Bhadra wall ways and 2 'Fort Wall' ways, no hill-fort circuit or gates, so no plan control points exist. T2 needs: hill-top coordinates for the plan, georeferencing from DEM ridges or ASI/Google-free control points, and a hill-fort outline.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
