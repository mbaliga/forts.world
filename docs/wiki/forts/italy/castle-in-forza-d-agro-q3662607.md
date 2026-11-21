# Castle in Forza d'Agrò

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-in-forza-d-agro-q3662607` |
| Coordinates | 37.91678, 15.33152 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.91678/15.33152)) |
| Wikidata | [Q3662607](https://www.wikidata.org/wiki/Q3662607) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Forza d'Agrò |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, road 122, waterway 1, building 590, wall 53, retaining-wall 106, cliff 1, zone 3).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 0, inferred 0, unknown 191.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/595255375 historic=castle Q3662607 18 m from ledger point
- pruned to the outline plus 150 m: 877 -> 698 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 457 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 106 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.91678/15.33152) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q3662607 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/castle-in-forza-d-agro-q3662607.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
