# Tour de Bonvouloir

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-bonvouloir-q3533288` |
| Coordinates | 48.5642, -0.49917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.5642/-0.49917)) |
| Wikidata | [Q3533288](https://www.wikidata.org/wiki/Q3533288) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Juvigny Val d'Andaine |
| Inception | 1485 |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | tower |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 32 elements (outline 1, zone 5, road 13, building 11, water 1, waterway 1).

Evidence: documented 0, mapped 32, inferred 0, derived 0; heights documented 2, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/186338652 historic=tower Q3533288 16 m from ledger point
- origin moved 16 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.5642/-0.49917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q3533288 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 32 elements); data/traces/tour-de-bonvouloir-q3533288.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 32 elements; outline osm:way/186338652 historic=tower Q3533288 16 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
