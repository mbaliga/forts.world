# Medieval City Wall

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `medieval-city-wall-q29882449` |
| Coordinates | 47.51631, 9.43384 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.51631/9.43384)) |
| Wikidata | [Q29882449](https://www.wikidata.org/wiki/Q29882449) (CC0) |
| Wikidata class | fortification |
| Types | built structure\|archaeological site\|city walls |
| Administrative area | Arbon |
| Designations | besonders wertvoll (Thurgau)\|class B Swiss cultural property of regional significance |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | 1262 erbaute Burg der Herren v. Arbon. 1515-20 unter Konstanzer Bischof Hugo v. Hohenlandenberg Ausbau eines Wohntraktes (Schloss) und Aufstocken des Turmes auf 30 m, bis 1798 Sitz bischöflischen Vögte. Restauriert 1972/72. (Quelle: Burgenverein.ch) |
| OSM `website` | https://www.arbon.ch/freizeit_tourismus/raeumlichkeiten/schloss_arbon |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 2, road 210, building 183, wall 6, zone 2).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 4, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/209965084 historic=castle Q29525748 241 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 183 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 210 mapped (trace size budget); minor lanes are not drawn
- origin moved 242 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.51631/9.43384) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; built structure\|archaeological site\|city walls; sitelinks=1; wikidata:Q29882449 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/medieval-city-wall-q29882449.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
