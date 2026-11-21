# Tour à poudre de Bourges

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-a-poudre-de-bourges-q22940534` |
| Coordinates | 47.07789, 2.3925 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.07789/2.3925)) |
| Wikidata | [Q22940534](https://www.wikidata.org/wiki/Q22940534) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Bourges |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |
| OSM `ruins` | no |
| OSM `website` | https://www.palais-jacques-coeur.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 223 elements (outline 1, road 93, building 337, wall 7, zone 2).

Evidence: documented 0, mapped 223, inferred 0, derived 0; heights documented 1, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1016747 historic=castle Q3360877 705 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 337 mapped (trace size budget); the rest of the town is not drawn
- origin moved 702 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.07789/2.3925) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q22940534 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 223 elements); data/traces/tour-a-poudre-de-bourges-q22940534.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
