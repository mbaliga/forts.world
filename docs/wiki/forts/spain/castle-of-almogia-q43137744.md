# Castle of Almogía

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-almogia-q43137744` |
| Coordinates | 36.8245, -4.54248 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.8245/-4.54248)) |
| Wikidata | [Q43137744](https://www.wikidata.org/wiki/Q43137744) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle |
| Administrative area | Almogía |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, marker 4, road 83, cliff 1, building 401, wall 207, zone 1).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 60, inferred 0, unknown 156.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1348781850 historic=ruins Q43137744 3 m from ledger point
- pruned to the outline plus 150 m: 698 -> 509 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 291 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.8245/-4.54248) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle; sitelinks=2; wikidata:Q43137744 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 278 elements); data/traces/castle-of-almogia-q43137744.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
