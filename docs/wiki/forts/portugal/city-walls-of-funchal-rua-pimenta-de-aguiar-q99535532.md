# City walls of Funchal (Rua Pimenta de Aguiar)

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-funchal-rua-pimenta-de-aguiar-q99535532` |
| Coordinates | 32.64928, -16.91531 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.64928/-16.91531)) |
| Wikidata | [Q99535532](https://www.wikidata.org/wiki/Q99535532) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|city walls |
| Administrative area | São Pedro |
| Inception | 1600 |
| Designations | Immovable Cultural Heritage of Municipal Interest |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, road 209, building 357, zone 5, retaining-wall 5, waterway 6, wall 1, water 4, cliff 1).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 56, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/146247418 historic=fort Q10283643 206 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 357 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 209 mapped (trace size budget); minor lanes are not drawn
- origin moved 204 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.64928/-16.91531) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|city walls; sitelinks=1; wikidata:Q99535532 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/city-walls-of-funchal-rua-pimenta-de-aguiar-q99535532.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
