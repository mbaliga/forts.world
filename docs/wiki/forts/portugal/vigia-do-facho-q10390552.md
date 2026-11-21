# Vigia do Facho

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vigia-do-facho-q10390552` |
| Coordinates | 38.69202, -9.43092 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.69202/-9.43092)) |
| Wikidata | [Q10390552](https://www.wikidata.org/wiki/Q10390552) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|cultural heritage |
| Administrative area | Cascais e Estoril |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | watchtower |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 147 elements (outline 1, marker 1, coastline 1, road 50, cliff 6, pit 1, zone 8, building 72, wall 3, retaining-wall 1, water 3).

Evidence: documented 0, mapped 147, inferred 0, derived 2; heights documented 0, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/556173494 historic=watchtower Q10390552 3 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":80,"medianInside":0,"medianOutside":25.6}
- sea-1: DEM check ok {"cells":15,"medianInside":-0.5,"medianOutside":22.6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.69202/-9.43092) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|cultural heritage; sitelinks=2; wikidata:Q10390552 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 145 elements); data/traces/vigia-do-facho-q10390552.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 147 elements; outline osm:way/556173494 historic=watchtower Q10390552 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
