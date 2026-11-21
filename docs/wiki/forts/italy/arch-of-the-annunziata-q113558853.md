# Arch of the Annunziata

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arch-of-the-annunziata-q113558853` |
| Coordinates | 37.03107, 14.70338 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.03107/14.70338)) |
| Wikidata | [Q113558853](https://www.wikidata.org/wiki/Q113558853) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Chiaramonte Gulfi |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 1, road 183, building 1199, retaining-wall 3, wall 32).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 0, inferred 0, unknown 155.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/243558128 historic=city_gate Q113558853 93 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1199 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 183 mapped (trace size budget); minor lanes are not drawn
- origin moved 94 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.03107/14.70338) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q113558853 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 309 elements); data/traces/arch-of-the-annunziata-q113558853.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 307 elements; outline osm:way/243558128 historic=city_gate Q113558853 93 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
