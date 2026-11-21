# Johannisborg

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `johannisborg-q2241779` |
| Coordinates | 58.60083, 16.19889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.60083/16.19889)) |
| Wikidata | [Q2241779](https://www.wikidata.org/wiki/Q2241779) (CC0) |
| Wikidata class | castle |
| Types | château\|sconce |
| Administrative area | Norrköping Municipality |
| Designations | governmental listed building complex\|monument in Fornminnesregistret |
| Wikipedia language editions | 7 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 119 elements (outline 1, road 67, building 37, zone 13, coastline 1).

Evidence: documented 0, mapped 119, inferred 0, derived 0; heights documented 1, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/94703259 historic=ruins 26 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 26 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.60083/16.19889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; château\|sconce; sitelinks=7; wikidata:Q2241779 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 119 elements); data/traces/johannisborg-q2241779.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
