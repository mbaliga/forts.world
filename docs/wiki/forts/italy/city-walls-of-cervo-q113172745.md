# City walls of Cervo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-cervo-q113172745` |
| Coordinates | 43.92709, 8.11454 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.92709/8.11454)) |
| Wikidata | [Q113172745](https://www.wikidata.org/wiki/Q113172745) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Cervo |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 292 elements (outline 1, marker 1, road 227, coastline 1, building 215, zone 5, retaining-wall 14).

Evidence: documented 0, mapped 292, inferred 0, derived 0; heights documented 7, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1498072335 historic=castle Q3662562 45 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 215 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 227 mapped (trace size budget); minor lanes are not drawn
- origin moved 45 m from the ledger point to the centre of the mapped site
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.92709/8.11454) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q113172745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 292 elements); data/traces/city-walls-of-cervo-q113172745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
