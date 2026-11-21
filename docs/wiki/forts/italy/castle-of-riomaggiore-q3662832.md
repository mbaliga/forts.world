# Castle of Riomaggiore

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-riomaggiore-q3662832` |
| Coordinates | 44.09992, 9.73749 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.09992/9.73749)) |
| Wikidata | [Q3662832](https://www.wikidata.org/wiki/Q3662832) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Riomaggiore |
| Inception | 1260 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 1, road 169, coastline 1, building 252, zone 8, waterway 6, wall 7, retaining-wall 3, water 2).

Evidence: documented 0, mapped 299, inferred 0, derived 2; heights documented 0, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/374492845 historic=castle Q3662832 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 252 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 169 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":83,"medianInside":0,"medianOutside":64.2}
- sea-1: DEM check failed {"cells":399,"medianInside":53,"medianOutside":82.8}
- 18 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.09992/9.73749) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q3662832 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/castle-of-riomaggiore-q3662832.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
