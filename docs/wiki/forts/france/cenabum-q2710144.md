# Cenabum

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cenabum-q2710144` |
| Coordinates | 47.9025, 1.909 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.9025/1.909)) |
| Wikidata | [Q2710144](https://www.wikidata.org/wiki/Q2710144) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|Gallo-Roman city\|oppidum |
| Wikipedia language editions | 8 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 332 elements (outline 1, marker 4, road 313, waterway 1, building 431, wall 27, zone 23, retaining-wall 6).

Evidence: documented 0, mapped 332, inferred 0, derived 0; heights documented 55, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/852062065 historic=yes 48 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 431 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 313 mapped (trace size budget); minor lanes are not drawn
- origin moved 47 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.9025/1.909) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|Gallo-Roman city\|oppidum; sitelinks=8; wikidata:Q2710144 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 332 elements); data/traces/cenabum-q2710144.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
