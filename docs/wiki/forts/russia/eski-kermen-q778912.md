# Eski-Kermen

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eski-kermen-q778912` |
| Coordinates | 44.61, 33.74139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.61/33.74139)) |
| Wikidata | [Q778912](https://www.wikidata.org/wiki/Q778912) (CC0) |
| Wikidata class | fort |
| Types | fortress\|archaeological site\|monolithic church\|ancient city |
| Administrative area | Zalisne |
| Inception | 0600 |
| Designations | State Register of Immovable Monuments of Ukraine\|federal cultural heritage site in Russia |
| Wikipedia language editions | 13 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, marker 1, road 14, cliff 2, zone 2).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/312665824 historic=ruins 135 m from ledger point
- origin moved 133 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.61/33.74139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|archaeological site\|monolithic church\|ancient city; sitelinks=13; wikidata:Q778912 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/eski-kermen-q778912.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
