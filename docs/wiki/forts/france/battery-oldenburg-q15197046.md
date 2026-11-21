# Battery Oldenburg

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `battery-oldenburg-q15197046` |
| Coordinates | 50.976, 1.90494 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.976/1.90494)) |
| Wikidata | [Q15197046](https://www.wikidata.org/wiki/Q15197046) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Calais |
| Wikipedia language editions | 3 |
| OSM `historic` | battery |

## What the model contains

Tier **T1**, status `outline-only`, 91 elements (outline 1, building 11, road 72, zone 1, water 4, coastline 1, waterway 1).

Evidence: documented 0, mapped 91, inferred 0, derived 0; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13090948 historic=battery Q15197046 118 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 206 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.976/1.90494) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=3; wikidata:Q15197046 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 76 elements); data/traces/battery-oldenburg-q15197046.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 91 elements; outline osm:relation/13090948 historic=battery Q15197046 118 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
