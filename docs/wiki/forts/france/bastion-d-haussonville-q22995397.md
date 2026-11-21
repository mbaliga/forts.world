# bastion d'Haussonville

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastion-d-haussonville-q22995397` |
| Coordinates | 48.69391, 6.18179 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.69391/6.18179)) |
| Wikidata | [Q22995397](https://www.wikidata.org/wiki/Q22995397) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|bastion |
| Administrative area | Nancy |
| Inception | C15 |
| Designations | classified historical monument |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |
| OSM `heritage` | 2 |
| OSM `website` | https://www.pop.culture.gouv.fr/notice/merimee/PA00135698 |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, marker 5, road 268, building 442, zone 31, wall 11).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 32, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/61521653 historic=ruins Q22995397 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 442 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 268 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.69391/6.18179) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|bastion; sitelinks=0; wikidata:Q22995397 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/bastion-d-haussonville-q22995397.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
