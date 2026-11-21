# Recinte emmurallat de Manresa

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `recinte-emmurallat-de-manresa-q20106516` |
| Coordinates | 41.72479, 1.828 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.72479/1.828)) |
| Wikidata | [Q20106516](https://www.wikidata.org/wiki/Q20106516) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|city walls |
| Administrative area | Manresa |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 4, road 174, building 473, zone 2, wall 51, retaining-wall 3).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 0, inferred 0, unknown 174.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/221311216 historic=ruins Q20106516 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 473 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 174 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.72479/1.828) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|city walls; sitelinks=2; wikidata:Q20106516 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/recinte-emmurallat-de-manresa-q20106516.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
