# Vigia do Pico do Facho

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vigia-do-pico-do-facho-q68218347` |
| Coordinates | 32.72411, -16.75903 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.72411/-16.75903)) |
| Wikidata | [Q68218347](https://www.wikidata.org/wiki/Q68218347) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|watchtower |
| Administrative area | Machico |
| Designations | proposed Immovable Cultural Heritage of Municipal Interest |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 48 elements (outline 1, marker 1, road 27, building 10, coastline 1, retaining-wall 1, wall 3, waterway 2, water 1).

Evidence: documented 0, mapped 48, inferred 0, derived 1; heights documented 2, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/382696143 historic=fort Q10284016 668 m from ledger point
- origin moved 669 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":237,"medianInside":0,"medianOutside":31.9}
- 15 DEM cells below -3 m (bathymetry) clamped to -3 m
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.72411/-16.75903) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|watchtower; sitelinks=0; wikidata:Q68218347 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 48 elements); data/traces/vigia-do-pico-do-facho-q68218347.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
