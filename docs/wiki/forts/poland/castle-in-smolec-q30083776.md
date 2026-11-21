# Castle in Smolec

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-in-smolec-q30083776` |
| Coordinates | 51.07564, 16.88445 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.07564/16.88445)) |
| Wikidata | [Q30083776](https://www.wikidata.org/wiki/Q30083776) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Smolec |
| Inception | 1523 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `description` | ruiny dawnego zamku na wyspie; teren zarośnięty i niedostępny (brak mostu) |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 256 elements (outline 1, marker 1, road 92, building 136, water 4, wall 7, waterway 6, zone 9).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 2, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/316170016 historic=castle Q30083776 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.07564/16.88445) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q30083776 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 256 elements); data/traces/castle-in-smolec-q30083776.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
