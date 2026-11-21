# Porta Maggiore

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-maggiore-q3908729` |
| Coordinates | 44.49007, 11.3573 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.49007/11.3573)) |
| Wikidata | [Q3908729](https://www.wikidata.org/wiki/Q3908729) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|historic building |
| Administrative area | Bologna |
| Inception | 1250 |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, road 71, wall 3, building 323, waterway 1, zone 4).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2007770 historic=yes Q21815963 717 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 323 mapped (trace size budget); the rest of the town is not drawn
- origin moved 713 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.49007/11.3573) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|historic building; sitelinks=6; wikidata:Q3908729 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/porta-maggiore-q3908729.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
