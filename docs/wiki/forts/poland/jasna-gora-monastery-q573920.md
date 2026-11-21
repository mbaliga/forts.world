# Jasna Góra Monastery

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jasna-gora-monastery-q573920` |
| Coordinates | 50.8125, 19.09722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8125/19.09722)) |
| Wikidata | [Q573920](https://www.wikidata.org/wiki/Q573920) (CC0) |
| Wikidata class | fort |
| Types | monastery\|fortress\|architectural ensemble\|sanctuary |
| Administrative area | Częstochowa |
| Inception | 1382 |
| Designations | Historical monument of Poland |
| Wikipedia language editions | 36 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | yes |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.jasnagora.pl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 237 elements (outline 1, marker 59, road 359, building 206, zone 45, wall 34).

Evidence: documented 0, mapped 237, inferred 0, derived 0; heights documented 5, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13236692 historic=castle Q573920 22 m from ledger point
- pruned to the outline plus 80 m: 704 -> 315 elements
- roads capped: kept the 80 longest of 159 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the outline centroid
- 41 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8125/19.09722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; monastery\|fortress\|architectural ensemble\|sanctuary; sitelinks=36; wikidata:Q573920 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 260 elements); data/traces/jasna-gora-monastery-q573920.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
