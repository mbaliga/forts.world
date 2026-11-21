# Castellum of Can Blai

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castellum-of-can-blai-q11913201` |
| Coordinates | 38.68167, 1.49736 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.68167/1.49736)) |
| Wikidata | [Q11913201](https://www.wikidata.org/wiki/Q11913201) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|castrum |
| Administrative area | Formentera |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 50 elements (outline 1, road 24, coastline 1, zone 12, building 12).

Evidence: documented 0, mapped 50, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/158961302 historic=archaeological_site Q11913201 6 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.68167/1.49736) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|castrum; sitelinks=1; wikidata:Q11913201 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 50 elements); data/traces/castellum-of-can-blai-q11913201.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
