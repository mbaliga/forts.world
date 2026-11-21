# Khānderi Island

> India · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `khanderi-island-q3827817` |
| Coordinates | 18.7042, 72.8131 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.7042/72.8131)) |
| Wikidata | [Q3827817](https://www.wikidata.org/wiki/Q3827817) (CC0) |
| Wikidata class | fort |
| Types | island\|fort |
| Administrative area | Raigad district |
| Designations | part of UNESCO World Heritage Site |
| Wikipedia language editions | 13 |
| Programme catalogue | confidence medium, significance rank ; sources wikidata:Q3827817 |
| OSM `historic` | fort |
| OSM `heritage` | https://whc.unesco.org/en/list/1739 |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, coastline 1, road 6, building 11, water 1).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 1, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/281255137 historic=fort Q3827817 5 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 4 m from the ledger point to the outline centroid
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.7042/72.8131) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Research notes

- [docs/research/khanderi-island-mapped-pass.md](../../../research/khanderi-island-mapped-pass.md)

## Ledger note

world; type=fort; island\|fort; sitelinks=13; wikidata:Q3827817; South Asia site missing from the programme (no programme row within 2 km sharing a name word) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/khanderi-island-q3827817.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
