# Galle Fort

> Sri Lanka · Southern · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `galle` |
| Coordinates | 6.027, 80.217 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/6.027/80.217)) |
| Wikidata | [Q2507050](https://www.wikidata.org/wiki/Q2507050) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Galle |
| Inception | 1584 |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 18 |
| Programme catalogue | confidence high, significance rank 50; sources catalogue:galle;wikidata:Q2507050;wikidata:Q15830652;unesco:451 |
| OSM `historic` | fort |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 376 elements (outline 1, marker 50, road 196, building 546, zone 14, coastline 3, water 3, wall 5, waterway 4).

Evidence: documented 0, mapped 376, inferred 0, derived 1; heights documented 4, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8386702 historic=fort Q2507050 30 m from ledger point
- present-day buildings capped: kept the 100 nearest the outline centre of 546 mapped (trace size budget); the rest of the town is not drawn
- origin moved 26 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":3967,"medianInside":1.5,"medianOutside":10.9}
- 33 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/6.027/80.217) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/galle-pass.md](../../../research/galle-pass.md)

## Ledger note

src/levels/galle.trace.js (curation tools/trace/curation/galle.mjs), level src/levels/galle-t1.js, registered in alpha-x0.js. Outline is OSM relation 8386702 (World Heritage property, Q2507050). Missing for T2: Registering a Dutch plan to place the bastions by name, the gates and the Dutch-era layout; bastion heights; the pre-1663 Portuguese form. This is the best T2 candidate in the batch. Research: docs/research/galle-pass.md. Batch-0 run 2026-11-15; written history not researched. Batch 0 (2026-11-11): alphabetical sweep F-V chosen by user; do first.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sri-lanka.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
