# Lower Castle Zizers

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lower-castle-zizers-q29521724` |
| Coordinates | 46.93395, 9.56516 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.93395/9.56516)) |
| Wikidata | [Q29521724](https://www.wikidata.org/wiki/Q29521724) (CC0) |
| Wikidata class | castle |
| Types | castle\|built structure |
| Administrative area | Zizers |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Erbaut um 1620 für den Santiago-Ritter Rudolf Andreas von Salis. Französisches Schloss nach Plänen des elsässischen Baumeister Cléber erbaut 1670-87 für Marschal Rudolf von Salis . Heute St.Johannes-Stift. (Quelle: Burgenverein.ch) |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, road 146, building 312, wall 17, zone 6).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 1, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135109543 historic=castle Q29521724 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 312 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.93395/9.56516) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|built structure; sitelinks=2; wikidata:Q29521724 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/lower-castle-zizers-q29521724.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
