# Fatehpur Sikri

> India · Uttar Pradesh · evidence: **T2 (partial)** · status: `plan-traced`

## Identity

| Field | Value |
|---|---|
| Site id | `fatehpur-sikri` |
| Coordinates | 27.091111, 77.661111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/27.091111/77.661111)) |
| Programme catalogue | confidence high, significance rank 2; sources catalogue:fatehpur-sikri;wikidata:Q179046;wikidata:Q6127154;unesco:255;smith-newton:r3084 |

## What the model contains

Tier **T1**, status `location-only`, 126 elements (marker 4, road 79, building 17, wall 10, zone 10, water 5, cliff 1).

Evidence: documented 0, mapped 126, inferred 0, derived 0; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/27.091111/77.661111) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/fatehpur-sikri-pass.md](../../../research/fatehpur-sikri-pass.md)

## Ledger note

src/levels/fatehpur-sikri.trace.js (curation tools/trace/curation/fatehpur-sikri.mjs), level src/levels/fatehpur-sikri-t1.js, registered in alpha-x0.js. No closed fort or city-wall polygon is mapped. Missing for T2: A georeferenced plan of the palace-city to place the Buland Darwaza, Diwan-i-Am, Diwan-i-Khas, Jama Masjid, Panch Mahal and the wall circuit with its gates; a closed OSM wall circuit. Research: docs/research/fatehpur-sikri-pass.md. Batch-0 run 2026-11-15; written history not researched. Batch 0 (2026-11-11): alphabetical sweep F-V chosen by user; do first. coords from wikidata (was 27.094,77.661) \| 2026-11-16: 1917 general plan fetched (Commons No restrictions, data/plans/fatehpur-sikri/) but earlier fetch hit 429; not traced this run; OSM has no closed wall. \| 2026-11-17: T2 partial from the 1917 Smith general plan (Commons, no restrictions) registered to OSM by 8 control points (data/plans/fatehpur-sikri/registration.json; rotation 37.8 deg matches the plan's north arrow, scale 7% over the printed bar, residuals 3-25 m, +-30 m). Placed: Kashmir Serai and Mint caravanserai footprints, 10 numbered palace sites as label markers; eras 1917/today; old generated scene kept as fatehpur-sikri-hand.js. Not placed: the plan wall circuit and Delhi/Lal/Agra/Birbal/Chodanpol/Ajmir/Chor gates (outside the +-900 m terrain window, would need a wider geometry/DEM fetch), no gate cut, no heights, no constructed layer (no sourced wall height). Missing: ASI measured drawings of the palace group, sourced heights.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
