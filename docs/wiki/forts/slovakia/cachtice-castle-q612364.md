# Čachtice Castle

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cachtice-castle-q612364` |
| Coordinates | 48.72472, 17.76083 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.72472/17.76083)) |
| Wikidata | [Q612364](https://www.wikidata.org/wiki/Q612364) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Čachtice |
| Inception | 1300 |
| Designations | Cultural Heritage Monuments of Slovakia |
| Wikipedia language editions | 26 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | wall |
| OSM `website` | https://cachtickyhrad.eu/ |

## What the model contains

Tier **T1**, status `outline+walls`, 33 elements (outline 1, road 23, waterway 1, building 2, zone 5).

Evidence: documented 0, mapped 33, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/50175685 historic=castle Q612364 36 m from ledger point
- origin moved 37 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.72472/17.76083) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=26; wikidata:Q612364 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 33 elements); data/traces/cachtice-castle-q612364.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
