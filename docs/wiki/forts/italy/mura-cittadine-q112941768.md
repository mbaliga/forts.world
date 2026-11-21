# Mura cittadine

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mura-cittadine-q112941768` |
| Coordinates | 38.67755, 15.89887 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.67755/15.89887)) |
| Wikidata | [Q112941768](https://www.wikidata.org/wiki/Q112941768) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Tropea |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, marker 1, road 125, coastline 1, building 124, wall 24, zone 3, waterway 3, retaining-wall 5, cliff 1).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 3, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1156972313 historic=building 75 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 76 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.67755/15.89887) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q112941768 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/mura-cittadine-q112941768.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
