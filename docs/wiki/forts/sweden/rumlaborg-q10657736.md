# Rumlaborg

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rumlaborg-q10657736` |
| Coordinates | 57.79167, 14.26693 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.79167/14.26693)) |
| Wikidata | [Q10657736](https://www.wikidata.org/wiki/Q10657736) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Jönköping Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 184 elements (outline 1, road 99, waterway 1, building 64, zone 18, water 1).

Evidence: documented 0, mapped 184, inferred 0, derived 0; heights documented 0, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/410055260 historic=archaeological_site Q10657736 9 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.79167/14.26693) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q10657736 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 184 elements); data/traces/rumlaborg-q10657736.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
