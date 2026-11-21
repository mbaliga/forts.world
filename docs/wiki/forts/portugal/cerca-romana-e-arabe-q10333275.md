# Cerca romana e árabe

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cerca-romana-e-arabe-q10333275` |
| Coordinates | 38.57124, -7.90897 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.57124/-7.90897)) |
| Wikidata | [Q10333275](https://www.wikidata.org/wiki/Q10333275) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|cultural heritage\|Roman archaeological site |
| Administrative area | União das Freguesias de Évora (São Mamede, Sé, São Pedro e Santo Antão) |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 361 elements (outline 1, marker 10, road 133, building 749, wall 87, retaining-wall 2, zone 8).

Evidence: documented 0, mapped 361, inferred 0, derived 0; heights documented 3, inferred 0, unknown 206.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/162589352 historic=castle Q113624382 165 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 749 mapped (trace size budget); the rest of the town is not drawn
- origin moved 166 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.57124/-7.90897) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|cultural heritage\|Roman archaeological site; sitelinks=3; wikidata:Q10333275 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 361 elements); data/traces/cerca-romana-e-arabe-q10333275.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
