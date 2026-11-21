# Fort Slava

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-slava-q3748634` |
| Coordinates | 60.4416, 26.9739 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.4416/26.9739)) |
| Wikidata | [Q3748634](https://www.wikidata.org/wiki/Q3748634) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `website` | https://www.rky.fi/read/asp/r_kohde_det.aspx?KOHDE_ID=1167 |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, coastline 1, zone 5).

Evidence: documented 0, mapped 7, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/387644977 historic=fort 24 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 24 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.4416/26.9739) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3748634 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 7 elements); data/traces/fort-slava-q3748634.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
