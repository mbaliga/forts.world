# Garitta di Piazza Europa

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `garitta-di-piazza-europa-q113562991` |
| Coordinates | 37.51696, 15.10622 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.51696/15.10622)) |
| Wikidata | [Q113562991](https://www.wikidata.org/wiki/Q113562991) (CC0) |
| Wikidata class | fort |
| Types | fortification\|bartizan |
| Administrative area | Catania |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 383 elements (outline 1, marker 1, road 179, retaining-wall 14, building 122, wall 32, zone 28, cliff 1, water 3, coastline 2).

Evidence: documented 0, mapped 383, inferred 0, derived 1; heights documented 6, inferred 0, unknown 162.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/354417761 historic=ruins 59 m from ledger point
- origin moved 59 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":18,"medianInside":0,"medianOutside":18.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.51696/15.10622) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|bartizan; sitelinks=0; wikidata:Q113562991 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 383 elements); data/traces/garitta-di-piazza-europa-q113562991.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
