# Porta Schiavonia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-schiavonia-q3908838` |
| Coordinates | 44.22638, 12.02872 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.22638/12.02872)) |
| Wikidata | [Q3908838](https://www.wikidata.org/wiki/Q3908838) (CC0) |
| Wikidata class | fortification |
| Types | gate\|city gate |
| Administrative area | Forlì |
| Inception | 1750 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 160 elements (outline 1, road 39, building 656).

Evidence: documented 0, mapped 160, inferred 0, derived 0; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2472164 historic=yes Q55157505 634 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 656 mapped (trace size budget); the rest of the town is not drawn
- origin moved 634 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.22638/12.02872) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate\|city gate; sitelinks=2; wikidata:Q3908838 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 160 elements); data/traces/porta-schiavonia-q3908838.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
