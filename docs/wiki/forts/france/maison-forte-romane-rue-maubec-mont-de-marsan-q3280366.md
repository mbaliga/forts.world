# Maison forte romane, rue Maubec, Mont-de-Marsan

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maison-forte-romane-rue-maubec-mont-de-marsan-q3280366` |
| Coordinates | 43.8936, -0.50056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.8936/-0.50056)) |
| Wikidata | [Q3280366](https://www.wikidata.org/wiki/Q3280366) (CC0) |
| Wikidata class | fort |
| Types | fortified house |
| Administrative area | Mont-de-Marsan |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 369 elements (outline 1, marker 8, road 168, building 259, water 4, wall 55, retaining-wall 12, waterway 3, zone 16).

Evidence: documented 0, mapped 369, inferred 0, derived 0; heights documented 105, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/45647699 historic=building Q3280366 20 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 259 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 168 mapped (trace size budget); minor lanes are not drawn
- origin moved 19 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.8936/-0.50056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house; sitelinks=2; wikidata:Q3280366 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 366 elements); data/traces/maison-forte-romane-rue-maubec-mont-de-marsan-q3280366.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 369 elements; outline osm:way/45647699 historic=building Q3280366 20 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
