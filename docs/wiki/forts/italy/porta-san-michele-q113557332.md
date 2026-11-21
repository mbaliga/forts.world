# Porta San Michele

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-san-michele-q113557332` |
| Coordinates | 38.14141, 14.96361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.14141/14.96361)) |
| Wikidata | [Q113557332](https://www.wikidata.org/wiki/Q113557332) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Patti |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | city_gate |
| OSM `description` | Ultima che si conservi delle cinque porte di accesso alla città. Edificata alla fine del XIII° sec. / last preserved of five city gates, built in the late XIII° century |
| OSM `barrier` | entrance |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, road 150, waterway 1, building 250, wall 53, retaining-wall 27).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 0, inferred 0, unknown 200.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/375878965 historic=city_gate Q113557332 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 250 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.14141/14.96361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q113557332 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 350 elements); data/traces/porta-san-michele-q113557332.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 352 elements; outline osm:way/375878965 historic=city_gate Q113557332 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
