# Auerburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `auerburg-q759250` |
| Coordinates | 47.6431, 12.1783 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.6431/12.1783)) |
| Wikidata | [Q759250](https://www.wikidata.org/wiki/Q759250) (CC0) |
| Wikidata class | ruin |
| Types | castle\|archaeological site\|castle ruin |
| Administrative area | Oberaudorf |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 3 |
| OSM `historic` | building |
| OSM `description` | Historischer Futterstall der Audorfer Bergbauern |

## What the model contains

Tier **T1**, status `outline+walls`, 155 elements (outline 1, marker 4, road 50, wall 16, cliff 4, building 68, waterway 5, zone 6, retaining-wall 1).

Evidence: documented 0, mapped 155, inferred 0, derived 0; heights documented 17, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/113490220 historic=building 144 m from ledger point
- origin moved 143 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.6431/12.1783) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|archaeological site\|castle ruin; sitelinks=3; wikidata:Q759250 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 155 elements); data/traces/auerburg-q759250.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
