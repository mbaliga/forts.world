# Hôtel de Raville

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hotel-de-raville-q22959918` |
| Coordinates | 49.35785, 6.16881 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.35785/6.16881)) |
| Wikidata | [Q22959918](https://www.wikidata.org/wiki/Q22959918) (CC0) |
| Wikidata class | castle |
| Types | castle\|private mansion |
| Administrative area | Thionville |
| Designations | listed in the general inventory of cultural heritage\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 310 elements (outline 1, marker 7, road 251, water 1, building 494, wall 13, zone 11, waterway 2, retaining-wall 5).

Evidence: documented 0, mapped 310, inferred 0, derived 0; heights documented 0, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/88947030 historic=castle Q22959918 26 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 494 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 251 mapped (trace size budget); minor lanes are not drawn
- origin moved 26 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.35785/6.16881) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|private mansion; sitelinks=2; wikidata:Q22959918 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/hotel-de-raville-q22959918.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
