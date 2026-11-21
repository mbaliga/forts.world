# Porta di S. Marta

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-di-s-marta-q112137332` |
| Coordinates | 45.60781, 9.51803 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.60781/9.51803)) |
| Wikidata | [Q112137332](https://www.wikidata.org/wiki/Q112137332) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Trezzo sull'Adda |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | city_gate |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 9, road 229, building 300, wall 20, zone 7).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 48, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1025508745 historic=city_gate Q112137332 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 300 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 229 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.60781/9.51803) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q112137332 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 245 elements); data/traces/porta-di-s-marta-q112137332.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 307 elements; outline osm:way/1025508745 historic=city_gate Q112137332 10 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
