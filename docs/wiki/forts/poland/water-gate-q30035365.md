# Water Gate

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `water-gate-q30035365` |
| Coordinates | 53.4915, 18.74686 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.4915/18.74686)) |
| Wikidata | [Q30035365](https://www.wikidata.org/wiki/Q30035365) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|water gate\|reconstructed structure |
| Administrative area | Grudziądz |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 162 elements (outline 1, marker 5, waterway 12, zone 13, road 221, building 260, wall 19, retaining-wall 1, cliff 1, water 1).

Evidence: documented 0, mapped 162, inferred 0, derived 0; heights documented 1, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/175536441 historic=city_gate Q30035365 1 m from ledger point
- pruned to the outline plus 150 m: 534 -> 306 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 160 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 124 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.4915/18.74686) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|water gate\|reconstructed structure; sitelinks=2; wikidata:Q30035365 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 322 elements); data/traces/water-gate-q30035365.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 162 elements; outline osm:way/175536441 historic=city_gate Q30035365 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
