# batterie du Lequin

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `batterie-du-lequin-q17621892` |
| Coordinates | 43.01294, 6.21755 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.01294/6.21755)) |
| Wikidata | [Q17621892](https://www.wikidata.org/wiki/Q17621892) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|artillery battery |
| Administrative area | Hyères |
| Inception | C19 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 30 elements (outline 1, road 7, coastline 1, zone 4, cliff 16, water 1).

Evidence: documented 0, mapped 30, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48733778 historic=castle Q17621892 0 m from ledger point
- sea-0: DEM check ok {"cells":266,"medianInside":0,"medianOutside":3.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.01294/6.21755) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|artillery battery; sitelinks=1; wikidata:Q17621892 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 30 elements); data/traces/batterie-du-lequin-q17621892.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
