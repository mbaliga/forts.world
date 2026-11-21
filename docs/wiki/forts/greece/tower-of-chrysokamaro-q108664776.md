# Tower of Chrysokamaro

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-chrysokamaro-q108664776` |
| Coordinates | 40.25246, 23.72313 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.25246/23.72313)) |
| Wikidata | [Q108664776](https://www.wikidata.org/wiki/Q108664776) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|tower |
| Administrative area | Sithonia Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 14 elements (outline 1, marker 1, zone 1, coastline 1, cliff 1, building 3, road 5, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/378961424 historic=archaeological_site 5 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":266,"medianInside":0,"medianOutside":0.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.25246/23.72313) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|tower; sitelinks=0; wikidata:Q108664776 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 14 elements); data/traces/tower-of-chrysokamaro-q108664776.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
