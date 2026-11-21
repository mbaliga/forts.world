# Kildrummy Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kildrummy-castle-q1741270` |
| Coordinates | 57.23481, -2.90463 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.23481/-2.90463)) |
| Wikidata | [Q1741270](https://www.wikidata.org/wiki/Q1741270) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Aberdeenshire |
| Designations | scheduled monument |
| Wikipedia language editions | 14 |
| OSM `historic` | ruins |
| OSM `website` | http://www.historic-scotland.gov.uk/propertyresults/propertyoverview.htm?PropID=PL_169&PropName=Kildrummy%20Castle |

## What the model contains

Tier **T1**, status `outline+walls`, 33 elements (outline 1, road 18, building 12, zone 1, wall 1).

Evidence: documented 0, mapped 33, inferred 0, derived 0; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5363427 historic=ruins Q1741270 10 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.23481/-2.90463) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=14; wikidata:Q1741270 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 33 elements); data/traces/kildrummy-castle-q1741270.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
