# Spitalturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `spitalturm-q34368776` |
| Coordinates | 47.78054, 9.60919 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.78054/9.60919)) |
| Wikidata | [Q34368776](https://www.wikidata.org/wiki/Q34368776) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Ravensburg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `description` | 1363 zur Sicherung der Stadtmauern errichteter Turm. Auch "Sauturm" genannt, nach den ehemaligen Schweineställen des Spitals, die bis zum 18. Jahrhundert am Fuß des Turms standen. Höhe: 44 Meter |

## What the model contains

Tier **T1**, status `outline+walls`, 292 elements (outline 1, marker 1, road 165, building 264, waterway 6, wall 8, zone 5, water 1).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 33, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/267027702 historic=yes Q34368776 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 264 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 165 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.78054/9.60919) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q34368776 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 292 elements); data/traces/spitalturm-q34368776.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
